import { makeExecutableSchema } from "@graphql-tools/schema";
import { GraphQLUpload } from "graphql-upload";
import { GraphQLDateTime } from "graphql-iso-date";
import GraphQLJSON from "graphql-type-json";
import { Repeatable } from "./schema";
import { PrismaClient } from "@prisma/client";
import services from "../services";
import utils from "../utils";

import User from "./user/schema";
import UserResolver from "./user/resolver";

import Group from "./group/schema";
import GroupResolver from "./group/resolver";

import GroupMember from "./groupMember/schema";
import GroupMemberResolver from "./groupMember/resolver";

import Event from "./event/schema";
import EventResolver from "./event/resolver";

import Ticket from "./ticket/schema";
import TicketResolver from "./ticket/resolver";

import File from "./file/schema";
import FileResolver from "./file/resolver";

const prisma = new PrismaClient();
const schema = makeExecutableSchema({
  typeDefs: [Repeatable, User, Group, GroupMember, Event, Ticket, File],
  resolvers: {
    Query: {
      ...UserResolver.Query,
      ...GroupResolver.Query,
      ...GroupMemberResolver.Query,
      ...EventResolver.Query,
      ...TicketResolver.Query,
      ...FileResolver.Query,
    },
    Mutation: {
      ...UserResolver.Mutation,
      ...GroupResolver.Mutation,
      ...GroupMemberResolver.Mutation,
      ...EventResolver.Mutation,
      ...TicketResolver.Mutation,
      ...FileResolver.Mutation,
    },
    Event: {
      group: services.Event.Group,
    },
    JSON: GraphQLJSON,
    DateTime: GraphQLDateTime,
    Upload: GraphQLUpload,
  },
});

export default {
  schema,
  context: (req) => ({
    req,
    prisma,
    utils,
    services,
  }),
};
