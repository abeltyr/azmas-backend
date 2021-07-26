import { Prisma, PrismaClient } from "@prisma/client";
import { MutationDeleteGroupMemberArgs } from "../../../types/graphql";

const Delete = async (
  args: MutationDeleteGroupMemberArgs,
  req: any,
  prisma: PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation
  >
): Promise<boolean> => {
  try {
    let groupMember = await prisma.groupMember.findFirst({
      where: { id: args.id },
    });
    if (null === groupMember) return false;
    let deletedRows = await prisma.groupMember.delete({
      where: { id: args.id },
    });
    if (deletedRows) return true;
  } catch (e) {
    return false;
  }
};

export default Delete;
