import { Prisma, PrismaClient } from "@prisma/client";
import { MutationRemoveCommunityMemberArgs } from "../../../types/graphql";

const Delete = async (
  args: MutationRemoveCommunityMemberArgs,
  req: any,
  prisma: PrismaClient
): Promise<boolean> => {
  try {
    let communityMembers = await prisma.communityMembers.findFirst({
      where: { id: args.id },
    });
    if (null === communityMembers) return false;
    let deletedRows = await prisma.communityMembers.delete({
      where: { id: args.id },
    });
    if (deletedRows) return true;
  } catch (e) {
    return false;
  }
};

export default Delete;
