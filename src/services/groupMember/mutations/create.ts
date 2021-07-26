import { Prisma, PrismaClient } from "@prisma/client";
import {
  GroupMember,
  MutationCreateGroupMemberArgs,
} from "../../../types/graphql";

const Create = async (
  args: MutationCreateGroupMemberArgs,
  prisma: PrismaClient
): Promise<Partial<GroupMember>> => {
  const groupMember = await prisma.groupMember.findFirst({
    where: {
      groupId: args.data.groupId,
      userId: args.data.userId,
    },
  });
  if (groupMember) return groupMember;
  const create = await prisma.groupMember.create({
    data: {
      ...args.data,
    },
  });
  return create;
};

export default Create;
