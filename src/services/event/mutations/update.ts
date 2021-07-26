import { Prisma, PrismaClient } from "@prisma/client";
import {
  MutationUpdateEventArgs,
  ResolversTypes,
} from "../../../types/graphql";

const Update = async (
  args: MutationUpdateEventArgs,
  req: any,
  prisma: PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation
  >
): Promise<ResolversTypes["Event"]> => {
  let update = await prisma.event.update({
    where: { id: args.id },
    data: {
      ...args.data,
    },
  });
  if (update) return update;
  throw new Error("the id given is invalided");
};
export default Update;
