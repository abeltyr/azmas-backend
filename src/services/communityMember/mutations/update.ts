import { Prisma, PrismaClient } from "@prisma/client";
import {
  MutationUpdateCommunityMemberArgs,
  ResolversTypes,
} from "../../../types/graphql";

const Update = async (
  args: MutationUpdateCommunityMemberArgs,
  req: any,
  prisma: PrismaClient
): Promise<ResolversTypes["CommunityMember"]> => {
  let update = await prisma.communityMembers.update({
    where: { id: args.id },
    data: {
      ...args.data,
    },
  });
  if (update) return update;
  throw new Error("the id given is invalided");
};
export default Update;
