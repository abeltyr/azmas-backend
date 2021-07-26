import { Prisma, PrismaClient } from "@prisma/client";
import {
  MutationUpdateGroupArgs,
  ResolversTypes,
} from "../../../types/graphql";

const Update = async (
  args: MutationUpdateGroupArgs,
  req: any,
  prisma: PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation
  >
): Promise<ResolversTypes["Group"]> => {
  let update = await prisma.group.update({
    where: { id: args.id },
    data: {
      ...args.data,
    },
  });
  if (update) return update;
  throw new Error("the id given is invalided");
};
export default Update;
