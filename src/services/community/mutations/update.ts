import { Prisma, PrismaClient } from "@prisma/client";
import {
  MutationUpdateCommunityArgs,
  ResolversTypes,
} from "../../../types/graphql";

const Update = async (
  args: MutationUpdateCommunityArgs,
  req: any,
  prisma: PrismaClient
): Promise<ResolversTypes["Community"]> => {
  let update = await prisma.community.update({
    where: { id: args.id },
    data: {
      ...args.data,
    },
  });
  if (update) return update;
  throw new Error("the id given is invalided");
};
export default Update;
