import { Event, QueryMonthlyEventArgs } from "../../../types/graphql";
import { PrismaClient } from "@prisma/client";

const MonthlyEvent = async (
  args: QueryMonthlyEventArgs,
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

export default MonthlyEvent;
