import { PrismaClient } from "@prisma/client";
import { Event, MutationCreateEventArgs } from "../../../types/graphql";

const Create = async (
  args: MutationCreateEventArgs,
  req: any,
  prisma: PrismaClient
): Promise<Partial<Event>> => {
  // //TODO: update
  let userId = "d3ae6680-493f-46b5-9931-b97d3be09768";
  // let userId = req.req.user.id;
  const create = await prisma.event.create({
    data: {
      ...args.data,
      eventStartDate: new Date(args.data.eventStartDate),
      eventEndDate: new Date(args.data.eventEndDate),
      creatorId: userId,
    },
  });
  return create;
};

export default Create;
