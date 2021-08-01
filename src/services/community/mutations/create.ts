import { Prisma, PrismaClient } from "@prisma/client";
import { Community, MutationCreateCommunityArgs } from "../../../types/graphql";

const Create = async (
  args: MutationCreateCommunityArgs,
  req: any,
  prisma: PrismaClient
): Promise<Partial<Community>> => {
  if (!/^[a-zA-Z\d]+$/.test(args.data.communityName))
    throw new Error("The communityName can only letter and number");

  // //TODO: update
  // let userId = "d3ae6680-493f-46b5-9931-b97d3be09768";
  let userId = req.req.user.id;
  let community = await prisma.community.create({
    data: {
      ...args.data,
      ownerId: userId,
    },
  });
  await prisma.communityMembers.create({
    data: {
      admin: true,
      communityId: community.id,
      userId: userId,
    },
  });
  return community;
};

export default Create;
