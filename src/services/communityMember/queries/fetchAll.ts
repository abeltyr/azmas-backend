import {
  CommunityMember,
  QueryCommunityMembersArgs,
} from "../../../types/graphql";
import { Prisma, PrismaClient } from "@prisma/client";

const FetchAll = async (
  args: QueryCommunityMembersArgs,
  prisma: PrismaClient
): Promise<Partial<CommunityMember>[]> => {
  return await prisma.communityMembers.findMany({
    skip: args.filter.skip,
    take: args.filter.take,
    where: {
      communityId: args.communityId,
    },
    orderBy: {
      createdAt: args.filter.order,
    },
  });
};

export default FetchAll;
