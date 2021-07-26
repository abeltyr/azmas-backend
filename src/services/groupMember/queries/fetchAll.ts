import { GroupMember, QueryGroupMembersArgs } from "../../../types/graphql";
import { Prisma, PrismaClient } from "@prisma/client";

const FetchAll = async (
  args: QueryGroupMembersArgs,
  prisma: PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation
  >
): Promise<Partial<GroupMember>[]> => {
  return await prisma.groupMember.findMany({
    skip: args.filter.skip,
    take: args.filter.take,
    where: {
      groupId: args.groupId,
    },
    orderBy: {
      createdAt: args.filter.order,
    },
  });
};

export default FetchAll;
