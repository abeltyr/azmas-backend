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

import community from "./community/schema";
import communityResolver from "./community/resolver";

import communityMember from "./communityMember/schema";
import communityMemberResolver from "./communityMember/resolver";

import Event from "./event/schema";
import EventResolver from "./event/resolver";

import Ticket from "./ticket/schema";
import TicketResolver from "./ticket/resolver";

import File from "./file/schema";
import FileResolver from "./file/resolver";

const prisma = new PrismaClient();
const schema = makeExecutableSchema({
  typeDefs: [Repeatable, User, community, communityMember, Event, Ticket, File],
  resolvers: {
    Query: {
      ...UserResolver.Query,
      ...communityResolver.Query,
      ...communityMemberResolver.Query,
      ...EventResolver.Query,
      ...TicketResolver.Query,
      ...FileResolver.Query,
    },
    Mutation: {
      ...UserResolver.Mutation,
      ...communityResolver.Mutation,
      ...communityMemberResolver.Mutation,
      ...EventResolver.Mutation,
      ...TicketResolver.Mutation,
      ...FileResolver.Mutation,
    },
    User: {
      avatar: services.User.Avatar,
    },
    Event: {
      community: services.Event.Community,
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
