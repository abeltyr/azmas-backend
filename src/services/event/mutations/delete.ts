import { Prisma, PrismaClient } from "@prisma/client";
import { MutationDeleteEventArgs } from "../../../types/graphql";

const Delete = async (
  args: MutationDeleteEventArgs,
  req: any,
  prisma: PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation
  >
): Promise<boolean> => {
  try {
    let event = await prisma.event.findFirst({
      where: { id: args.id },
    });
    if (null === event) return false;
    let deletedRows = await prisma.event.delete({
      where: { id: args.id },
    });
    if (deletedRows) return true;
  } catch (e) {
    return false;
  }
};

export default Delete;
