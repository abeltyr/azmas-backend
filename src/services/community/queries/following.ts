import { Community, QueryCommunitiesArgs } from "../../../types/graphql";
import { CommunityMembers, Prisma, PrismaClient } from "@prisma/client";

const FetchAll = async (
  args: QueryCommunitiesArgs,
  req: any,
  prisma: PrismaClient
): Promise<Partial<Community>[]> => {
  let userCommunities = await prisma.communityMembers.findMany({
    where: {
      // //TODO: update
      userId: req.req.user.id,
      // "678c6bf0-ea8c-41b0-bb66-2a3077b51f72",
    },
    skip: args.filter.skip,
    take: args.filter.take,
    orderBy: {
      createdAt: args.filter.order,
    },
    include: {
      community: true,
    },
  });
  let userCommunityData = [];
  let userCommunity: any;
  for (userCommunity of userCommunities) {
    userCommunityData = [...userCommunityData, userCommunity.community];
  }
  return userCommunityData;
};

export default FetchAll;
