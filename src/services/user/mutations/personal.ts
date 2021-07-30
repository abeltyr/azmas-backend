import { Prisma, PrismaClient } from "@prisma/client";
import { MutationPersonalDataUpdateArgs } from "../../../types/graphql";

const personalDataUpdate = async (
  args: MutationPersonalDataUpdateArgs,
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
        fullName: args.data.fullName,
        birthDate: new Date(args.data.birthDate),
        bio: args.data.bio,
        gender: args.data.gender,
      },
    });
    if (user) return true;
  } catch (e) {
    throw new Error(e);
  }
  return false;
};

export default personalDataUpdate;
