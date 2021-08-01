import { Prisma, PrismaClient } from "@prisma/client";
import {
  CommunityMember,
  MutationAddCommunityMemberArgs,
} from "../../../types/graphql";

const Create = async (
  args: MutationAddCommunityMemberArgs,
  prisma: PrismaClient
): Promise<Partial<CommunityMember>> => {
  const communityMember = await prisma.communityMembers.findFirst({
    where: {
      communityId: args.data.communityId,
      userId: args.data.userId,
    },
  });
  if (communityMember) return communityMember;
  const create = await prisma.communityMembers.create({
    data: {
      ...args.data,
    },
  });
  return create;
};

export default Create;
