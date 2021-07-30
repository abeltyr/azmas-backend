import { Prisma, PrismaClient } from "@prisma/client";
import { MutationSocailDataUpdateArgs } from "../../../types/graphql";

const socailDataUpdate = async (
  args: MutationSocailDataUpdateArgs,
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
        instagram: args.data.instagram,
        facebook: args.data.facebook,
        twitter: args.data.twitter,
        telegram: args.data.telegram,
      },
    });
    if (user) return true;
  } catch (e) {
    throw new Error(e);
  }
  return false;
};

export default socailDataUpdate;
