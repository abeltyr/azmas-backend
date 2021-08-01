import { Prisma, PrismaClient } from "@prisma/client";
import { MutationDeleteCommunityArgs } from "../../../types/graphql";

const Delete = async (
  args: MutationDeleteCommunityArgs,
  req: any,
  prisma: PrismaClient
): Promise<boolean> => {
  try {
    let community = await prisma.community.findFirst({
      where: { id: args.id },
    });
    if (null === community) return false;
    let deletedRows = await prisma.community.delete({
      where: { id: args.id },
    });
    if (deletedRows) return true;
  } catch (e) {
    return false;
  }
};

export default Delete;
