import { GroupMember, QueryGroupMemberArgs } from "../../../types/graphql";
import { Prisma, PrismaClient } from "@prisma/client";

const FetchOne = async (
  args: QueryGroupMemberArgs,
  prisma: PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation
  >
): Promise<Partial<GroupMember>> => {
  return await prisma.groupMember.findFirst({
    where: { id: args.id },
  });
};

export default FetchOne;
