import { Event, QueryEventArgs } from "../../../types/graphql";
import { Prisma, PrismaClient } from "@prisma/client";

const FetchOne = async (
  args: QueryEventArgs,
  prisma: PrismaClient
): Promise<Partial<Event>> => {
  return await prisma.event.findFirst({
    where: { id: args.id },
  });
};

export default FetchOne;
