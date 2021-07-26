import { Event, QueryEventsArgs } from "../../../types/graphql";
import { Prisma, PrismaClient } from "@prisma/client";

const FetchAll = async (
  args: QueryEventsArgs,
  prisma: PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation
  >
): Promise<Partial<Event>[]> => {
  return await prisma.event.findMany({
    skip: args.filter.skip,
    take: args.filter.take,
    orderBy: {
      eventStartDate: args.filter.order,
    },
  });
};

export default FetchAll;
