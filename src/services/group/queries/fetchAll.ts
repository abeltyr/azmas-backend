import { Group, QueryGroupsArgs } from "../../../types/graphql";
import { Prisma, PrismaClient } from "@prisma/client";

const FetchAll = async (
  args: QueryGroupsArgs,
  prisma: PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation
  >
): Promise<Partial<Group>[]> => {
  return await prisma.group.findMany({
    skip: args.filter.skip,
    take: args.filter.take,
    orderBy: {
      createdAt: args.filter.order,
    },
  });
};

export default FetchAll;
