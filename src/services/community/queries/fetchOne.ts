import { Community, QueryCommunityArgs } from "../../../types/graphql";
import { Prisma, PrismaClient } from "@prisma/client";

const FetchOne = async (
  args: QueryCommunityArgs,
  prisma: PrismaClient
): Promise<Partial<Community>> => {
  return await prisma.community.findFirst({
    where: { id: args.id },
  });
};

export default FetchOne;
