import { PrismaClient } from "@prisma/client";
import { Event, MutationCreateEventArgs } from "../../../types/graphql";

const Create = async (
  args: MutationCreateEventArgs,
  prisma: PrismaClient
): Promise<Partial<Event>> => {
  args.data.eventStartDate = new Date(args.data.eventStartDate);
  args.data.eventEndDate = new Date(args.data.eventEndDate);
  const create = await prisma.event.create({
    data: {
      ...args.data,
    },
  });
  return create;
};

export default Create;
