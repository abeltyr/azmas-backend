import { Prisma, PrismaClient } from "@prisma/client";
import {
  MutationSecurityDataUpdateArgs,
  ResolversTypes,
} from "../../../types/graphql";
import Jwt from "jsonwebtoken";
import CryptoJS from "crypto-js";

const securityDataUpdate = async (
  args: MutationSecurityDataUpdateArgs,
  req: any,
  prisma: PrismaClient
): Promise<ResolversTypes["User"]> => {
  let oldPassword = args.data.oldPassword;
  let password = args.data.password;
  let device = args.data.device;

  let user = await prisma.user.findFirst({
    where: {
      id: req.req.user.id,
    },
  });
  let userPassword = await prisma.userPassword.findFirst({
    where: {
      userId: user.id,
    },
  });

  let bytes = CryptoJS.AES.decrypt(userPassword.hash, process.env.SALT);
  let originalText = bytes.toString(CryptoJS.enc.Utf8);
  if (originalText != oldPassword)
    throw new Error("Your Old Password Doesn't Match");

  await prisma.userPassword.update({
    data: {
      hash: CryptoJS.AES.encrypt(password, process.env.SALT).toString(),
      userId: user.id,
      device: args.data.device,
    },
    where: {
      id: userPassword.id,
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

export default securityDataUpdate;
