import { PrismaClient } from "@prisma/client";
import { Event, MutationCreateEventArgs } from "../../../types/graphql";

const Create = async (
  args: MutationCreateEventArgs,
  prisma: PrismaClient
): Promise<Partial<Event>> => {
  const create = await prisma.event.create({
    data: {
      ...args.data,
      eventStartDate: new Date(args.data.eventStartDate),
      eventEndDate: new Date(args.data.eventEndDate),
    },
  });
  return create;
};

export default Create;
