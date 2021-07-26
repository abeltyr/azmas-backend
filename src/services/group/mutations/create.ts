import { Prisma, PrismaClient } from "@prisma/client";
import { Group, MutationCreateGroupArgs } from "../../../types/graphql";

const Create = async (
  args: MutationCreateGroupArgs,
  prisma: PrismaClient
): Promise<Partial<Group>> => {
  const create = await prisma.group.create({
    data: {
      ...args.data,
      groupName: args.data.groupName,
    },
  });
  return create;
};

export default Create;
