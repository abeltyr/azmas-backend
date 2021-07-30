import { Prisma, PrismaClient } from "@prisma/client";
import { User, MutationSignUpArgs } from "../../../types/graphql";
import CryptoJS from "crypto-js";
import Jwt from "jsonwebtoken";

const Create = async (
  args: MutationSignUpArgs,
  prisma: PrismaClient
): Promise<Partial<User>> => {
  if (!/^[a-zA-Z\d]+$/.test(args.data.userName))
    throw new Error("The username can't have space or other values");

  let password = args.data.password;
  delete args.data.password;
  let device = args.data.device;
  delete args.data.device;
  let user = await prisma.user.create({
    data: {
      ...args.data,
      birthDate: new Date(args.data.birthDate),
    },
  });

  await prisma.userPassword.create({
    data: {
      hash: CryptoJS.AES.encrypt(password, process.env.SALT).toString(),
      userId: user.id,
      device: device,
    },
  });

  let token = Jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
      data: user,
    },
    process.env.JWT_KEY
  );
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

export default Create;
