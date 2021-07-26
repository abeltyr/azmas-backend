import { Event, QueryEventArgs } from "../../../types/graphql";
import { Prisma, PrismaClient } from "@prisma/client";

const FetchOne = async (
  args: QueryEventArgs,
  prisma: PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation
  >
): Promise<Partial<Event>> => {
  return await prisma.event.findFirst({
    where: { id: args.id },
  });
};

export default FetchOne;
