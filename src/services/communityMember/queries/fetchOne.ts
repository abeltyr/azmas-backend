import {
  CommunityMember,
  QueryCommunityMemberArgs,
} from "../../../types/graphql";
import { Prisma, PrismaClient } from "@prisma/client";

const FetchOne = async (
  args: QueryCommunityMemberArgs,
  prisma: PrismaClient
): Promise<Partial<CommunityMember>> => {
  return await prisma.communityMembers.findFirst({
    where: { id: args.id },
  });
};

export default FetchOne;
