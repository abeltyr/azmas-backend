import { Prisma, PrismaClient } from "@prisma/client";
import { MutationDeleteGroupArgs } from "../../../types/graphql";

const Delete = async (
  args: MutationDeleteGroupArgs,
  req: any,
  prisma: PrismaClient
): Promise<boolean> => {
  try {
    let group = await prisma.group.findFirst({
      where: { id: args.id },
    });
    if (null === group) return false;
    let deletedRows = await prisma.group.delete({
      where: { id: args.id },
    });
    if (deletedRows) return true;
  } catch (e) {
    return false;
  }
};

export default Delete;
