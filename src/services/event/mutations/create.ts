import { Prisma, PrismaClient } from "@prisma/client";
import { Event, MutationCreateEventArgs } from "../../../types/graphql";

const Create = async (
  args: MutationCreateEventArgs,
  prisma: PrismaClient
): Promise<Partial<Event>> => {
  const create = await prisma.event.create({
    data: {
      ...args.data,
    },
  });
  return create;
};

export default Create;
