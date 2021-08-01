import { Prisma, PrismaClient } from "@prisma/client";
import { Community, MutationCreateCommunityArgs } from "../../../types/graphql";

const Create = async (
  args: MutationCreateCommunityArgs,
  prisma: PrismaClient
): Promise<Partial<Community>> => {
  const create = await prisma.community.create({
    data: {
      ...args.data,
      communityName: args.data.communityName,
    },
  });
  return create;
};

export default Create;
