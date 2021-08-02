import { PrismaClient } from "@prisma/client";
import {
  MutationPrivateCommunityArgs,
  ResolversTypes,
} from "../../../types/graphql";

const privateCommunity = async (
  args: MutationPrivateCommunityArgs,
  req: any,
  prisma: PrismaClient
): Promise<ResolversTypes["Community"]> => {
  let communityMember = await prisma.communityMembers.findFirst({
    where: { userId: req.req.user.id, communityId: args.id },
  });
  if (communityMember && communityMember.admin) {
    let community = await prisma.community.findUnique({
      where: { id: args.id },
    });
    if (!community) throw new Error("Community id was invalid");
    return await prisma.community.update({
      where: { id: args.id },
      data: {
        ...community,
        public: args.public,
      },
    });
  } else throw new Error("Only an admin can update those data's");
};
export default privateCommunity;
