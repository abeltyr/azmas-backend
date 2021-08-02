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
  // //TODO: update
  let userId = "d3ae6680-493f-46b5-9931-b97d3be09768";
  // let userId = req.req.user.id;
  let update = await prisma.event.update({
    where: { id: args.id },
    data: {
      ...args.data,
      eventStartDate: new Date(args.data.eventStartDate),
      eventEndDate: new Date(args.data.eventEndDate),
      creatorId: userId,
    },
  });
  if (update) return update;
  throw new Error("the id given is invalided");
};
export default Update;
