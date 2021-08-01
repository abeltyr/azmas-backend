import {
  Ticket,
  MutationCreateTicketArgs,
  QueryTicketsArgs,
  Resolver,
  MutationUpdateTicketArgs,
  MutationDeleteTicketArgs,
  QueryTicketArgs,
} from "../../types/graphql";
import { context } from "../../types/service";

const ticket: Resolver<Partial<Ticket>, {}, context, QueryTicketArgs> = async (
  _,
  args,
  { req, prisma, utils, services }
) => {
  return await services.Ticket.FetchOne(args, prisma);
};

const tickets: Resolver<Partial<Ticket>[], {}, context, QueryTicketsArgs> =
  async (_, args, { req, prisma, utils, services }) => {
    return await services.Ticket.FetchAll(args, prisma);
  };

const createTicket: Resolver<
  Partial<Ticket>,
  {},
  context,
  MutationCreateTicketArgs
> = async (_, args, { req, prisma, utils, services }) => {
  return await services.Ticket.Create(args, prisma);
};

const updateTicket: Resolver<
  Partial<Ticket>,
  {},
  context,
  MutationUpdateTicketArgs
> = async (_, args, { req, prisma, utils, services }) => {
  return await services.Ticket.Update(args, req, prisma);
};

const deleteTicket: Resolver<boolean, {}, context, MutationDeleteTicketArgs> =
  async (_, args, { req, prisma, utils, services }) => {
    return await services.Ticket.Delete(args, req, prisma);
  };

export default {
  Query: { ticket, tickets },
  Mutation: {
    createTicket,
    deleteTicket,
    updateTicket,
  },
};
