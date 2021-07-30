import { Prisma, PrismaClient } from "@prisma/client";
import { MutationAccountDataUpdateArgs } from "../../../types/graphql";

const accountDataUpdate = async (
  args: MutationAccountDataUpdateArgs,
  req: any,
  prisma: PrismaClient
): Promise<Boolean> => {
  try {
    let userData = await prisma.user.findFirst({
      where: { id: req.req.user.id },
    });
    let user = await prisma.user.update({
      where: { id: userData.id },
      data: {
        ...userData,
        email: args.data.email,
        userName: args.data.userName,
        phoneNumber: args.data.phoneNumber,
      },
    });
    if (user) return true;
  } catch (e) {
    throw new Error(e);
  }
  return false;
};

export default accountDataUpdate;
