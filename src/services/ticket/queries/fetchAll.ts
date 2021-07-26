import { Ticket, QueryTicketsArgs } from "../../../types/graphql";
import { Prisma, PrismaClient } from "@prisma/client";

const FetchAll = async (
  args: QueryTicketsArgs,
  prisma: PrismaClient
): Promise<Partial<Ticket>[]> => {
  return await prisma.ticket.findMany({
    skip: args.filter.skip,
    take: args.filter.take,
    where: {
      eventId: args.eventId,
    },
    orderBy: {
      createdAt: args.filter.order,
    },
  });
};

export default FetchAll;
