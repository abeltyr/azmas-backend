import { makeExecutableSchema } from "@graphql-tools/schema";
import { GraphQLUpload } from "graphql-upload";
import { GraphQLDateTime } from "graphql-iso-date";
import GraphQLJSON from "graphql-type-json";
import { Repeatable } from "./schema";
import User from "./users/schema";
import UserResolver from "./users/resolver";
import { PrismaClient } from "@prisma/client";

import services from "../services";
import utils from "../utils";

const prisma = new PrismaClient();
const schema = makeExecutableSchema({
  typeDefs: [Repeatable, User],
  resolvers: {
    Query: { ...UserResolver.Query },
    Mutation: { ...UserResolver.Mutation },
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
