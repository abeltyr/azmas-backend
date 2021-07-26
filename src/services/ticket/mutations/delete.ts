import { PrismaClient } from "@prisma/client";
import { MutationDeleteTicketArgs } from "../../../types/graphql";

const Delete = async (
  args: MutationDeleteTicketArgs,
  req: any,
  prisma: PrismaClient
): Promise<boolean> => {
  try {
    let event = await prisma.ticket.findFirst({
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
