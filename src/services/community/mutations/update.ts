import { Prisma, PrismaClient } from "@prisma/client";
import {
  MutationUpdateCommunityArgs,
  ResolversTypes,
} from "../../../types/graphql";

const Update = async (
  args: MutationUpdateCommunityArgs,
  req: any,
  prisma: PrismaClient
): Promise<ResolversTypes["Community"]> => {
  let communityMember = await prisma.communityMembers.findFirst({
    where: { userId: req.req.user.id, communityId: args.id },
  });
  if (communityMember && communityMember.admin) {
    return await prisma.community.update({
      where: { id: args.id },
      data: {
        ...args.data,
      },
    });
  } else throw new Error("Only an admin can update those data's");
};
export default Update;
