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

const prisma = new PrismaClient();
const schema = makeExecutableSchema({
  typeDefs: [Repeatable, User, Group],
  resolvers: {
    Query: { ...UserResolver.Query, ...GroupResolver.Query },
    Mutation: { ...UserResolver.Mutation, ...GroupResolver.Mutation },
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
