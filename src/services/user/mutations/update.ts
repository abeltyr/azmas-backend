import { Prisma, PrismaClient } from "@prisma/client";
import {
  MutationUpdateUserArgs,
  ResolversTypes
} from "../../../types/graphql";

const Update = async (
  args: MutationUpdateUserArgs,
  req: any,
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, Prisma.RejectOnNotFound | Prisma.RejectPerOperation>,
): Promise<ResolversTypes["User"]> => {

  let update = await prisma.user.update(
    {
      where: { id: args.id },
      data: {
        ...args.data,
      },
    });
  if (update) return update;
  throw new Error("the id given is invalided");
};
export default Update;