import { Ticket, QueryTicketArgs } from "../../../types/graphql";
import { Prisma, PrismaClient } from "@prisma/client";

const FetchOne = async (
  args: QueryTicketArgs,
  prisma: PrismaClient
): Promise<Partial<Ticket>> => {
  return await prisma.ticket.findFirst({
    where: { id: args.id },
  });
};

export default FetchOne;
