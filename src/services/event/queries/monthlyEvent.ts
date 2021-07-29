import { Event, QueryMonthlyeventArgs } from "../../../types/graphql";
import { PrismaClient } from "@prisma/client";

const monthlyEvent = async (
  args: QueryMonthlyeventArgs,
  prisma: PrismaClient
): Promise<Partial<Event>[]> => {
  return await prisma.event.findMany({
    skip: args.filter.skip,
    take: args.filter.take,
    orderBy: {
      eventStartDate: args.filter.order,
    },
    where: {
      eventEndDate: {
        gte: new Date(args.startDate),
        lt: new Date(args.endDate),
      },
    },
  });
};

export default { monthlyEvent };
