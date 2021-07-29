import { Prisma, PrismaClient } from "@prisma/client";
import { User, MutationLoginArgs } from "../../../types/graphql";
import CryptoJS from "crypto-js";
import Jwt from "jsonwebtoken";

const Login = async (
  args: MutationLoginArgs,
  prisma: PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation
  >
): Promise<Partial<User>> => {
  let userName = args.data.userName;
  let password = args.data.password;
  let device = args.data.device;
  let user;
  if (userName && userName.includes("@") && userName.includes(".")) {
    user = await prisma.user.findUnique({
      where: {
        email: userName,
      },
    });
  } else if (userName) {
    user = await prisma.user.findUnique({
      where: {
        userName: userName,
      },
    });
  } else throw new Error("The Provided UserName Input Seems Invalid");

  if (!user) throw new Error("The Given Creditors Seems Wrong");

  let userPassword = await prisma.userPassword.findFirst({
    where: {
      userId: user.id,
    },
  });

  let bytes = CryptoJS.AES.decrypt(userPassword.hash, process.env.SALT);
  let originalText = bytes.toString(CryptoJS.enc.Utf8);
  if (originalText != password)
    throw new Error("The Given Password Seems Wrong");

  let token = Jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
      data: user,
    },
    process.env.JWT_KEY
  );

  await prisma.userToken.updateMany({
    where: {
      userId: user.id,
      device: {
        contains: device,
        in: device,
      },
    },
    data: { active: false },
  });

  await prisma.userToken.create({
    data: {
      token: token,
      userId: user.id,
      device: device,
      Endperiod: new Date(
        (Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30) * 1000
      ),
    },
  });

  return { ...user, token };
};

export default Login;
