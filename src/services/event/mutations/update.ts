import { Prisma, PrismaClient } from "@prisma/client";
import {
  MutationUpdateEventArgs,
  ResolversTypes,
} from "../../../types/graphql";

const Update = async (
  args: MutationUpdateEventArgs,
  req: any,
  prisma: PrismaClient
): Promise<ResolversTypes["Event"]> => {
  args.data.eventStartDate = new Date(args.data.eventStartDate);
  args.data.eventEndDate = new Date(args.data.eventEndDate);
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
