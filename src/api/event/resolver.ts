import {
  Event,
  MutationCreateEventArgs,
  QueryMonthlyEventArgs,
  QueryEventsArgs,
  Resolver,
  MutationUpdateEventArgs,
  MutationDeleteEventArgs,
  QueryEventArgs,
} from "../../types/graphql";
import { context } from "../../types/service";

const event: Resolver<Partial<Event>, {}, context, QueryEventArgs> = async (
  _,
  args,
  { req, prisma, utils, services }
) => {
  return await services.Event.FetchOne(args, prisma);
};

const events: Resolver<Partial<Event>[], {}, context, QueryEventsArgs> = async (
  _,
  args,
  { req, prisma, utils, services }
) => {
  return await services.Event.FetchAll(args, prisma);
};

const monthlyEvent: Resolver<
  Partial<Event>[],
  {},
  context,
  QueryMonthlyEventArgs
> = async (_, args, { req, prisma, utils, services }) => {
  // let userLogIn = false;
  // try {
  //   await utils.GetUser(req, prisma);
  //   userLogIn = true;
  // } catch (e) {}
  return await services.Event.MonthlyEvent(args, prisma);
};

const createEvent: Resolver<
  Partial<Event>,
  {},
  context,
  MutationCreateEventArgs
> = async (_, args, { req, prisma, utils, services }) => {
  // await utils.GetUser(req, prisma);
  return await services.Event.Create(args, req, prisma);
};

const updateEvent: Resolver<
  Partial<Event>,
  {},
  context,
  MutationUpdateEventArgs
> = async (_, args, { req, prisma, utils, services }) => {
  await utils.GetUser(req, prisma);
  return await services.Event.Update(args, req, prisma);
};

const deleteEvent: Resolver<boolean, {}, context, MutationDeleteEventArgs> =
  async (_, args, { req, prisma, utils, services }) => {
    await utils.GetUser(req, prisma);
    return await services.Event.Delete(args, req, prisma);
  };

export default {
  Query: { event, events, monthlyEvent },
  Mutation: {
    createEvent,
    deleteEvent,
    updateEvent,
  },
};
