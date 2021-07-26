import { PrismaClient } from "@prisma/client";
import { Ticket, MutationCreateTicketArgs } from "../../../types/graphql";

const Create = async (
  args: MutationCreateTicketArgs,
  prisma: PrismaClient
): Promise<Partial<Ticket>> => {
  const ticket = await prisma.ticket.findFirst({
    where: {
      eventId: args.data.eventId,
      userId: args.data.userId,
    },
  });
  if (ticket) return ticket;
  const event = await prisma.event.findFirst({
    where: {
      id: args.data.eventId,
    },
  });
  const create = await prisma.ticket.create({
    data: {
      ...args.data,
      groupId: event.groupId,
    },
  });
  return create;
};

export default Create;
