import { GroupMember, QueryGroupMemberArgs } from "../../../types/graphql";
import { Prisma, PrismaClient } from "@prisma/client";

const FetchOne = async (
  args: QueryGroupMemberArgs,
  prisma: PrismaClient
): Promise<Partial<GroupMember>> => {
  return await prisma.groupMember.findFirst({
    where: { id: args.id },
  });
};

export default FetchOne;
