import { Community, QueryCommunitiesArgs } from "../../../types/graphql";
import { Prisma, PrismaClient } from "@prisma/client";

const FetchAll = async (
  args: QueryCommunitiesArgs,
  prisma: PrismaClient
): Promise<Partial<Community>[]> => {
  return await prisma.community.findMany({
    skip: args.filter.skip,
    take: args.filter.take,
    orderBy: {
      createdAt: args.filter.order,
    },
  });
};

export default FetchAll;
