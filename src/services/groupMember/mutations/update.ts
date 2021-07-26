import { Prisma, PrismaClient } from "@prisma/client";
import {
  MutationUpdateGroupMemberArgs,
  ResolversTypes,
} from "../../../types/graphql";

const Update = async (
  args: MutationUpdateGroupMemberArgs,
  req: any,
  prisma: PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation
  >
): Promise<ResolversTypes["GroupMember"]> => {
  let update = await prisma.groupMember.update({
    where: { id: args.id },
    data: {
      ...args.data,
    },
  });
  if (update) return update;
  throw new Error("the id given is invalided");
};
export default Update;
