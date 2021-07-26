import { User, QueryUsersArgs } from "../../../types/graphql";
import { Prisma, PrismaClient } from "@prisma/client";

const FetchAll = async (
  args: QueryUsersArgs,
  prisma: PrismaClient
): Promise<Partial<User>[]> => {
  return await prisma.user.findMany({
    skip: args.filter.skip,
    take: args.filter.take,
    orderBy: {
      createdAt: args.filter.order,
    },
  });
};

export default FetchAll;
