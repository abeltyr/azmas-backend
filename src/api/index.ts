import { makeExecutableSchema } from "@graphql-tools/schema";
import { GraphQLUpload } from "graphql-upload";
import { GraphQLDateTime } from "graphql-iso-date";
import GraphQLJSON from "graphql-type-json";
import { Repeatable } from "./schema";
import User from "./users/schema";
import UserResolver from "./users/resolver";
import { PrismaClient } from "@prisma/client";
import * as Sentry from "@sentry/node";

import services from "../services";
import utils from "../utils";
import { ApolloError } from "apollo-server";

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
  // plugins: [
  //   {
  //     requestDidStart(_) {
  //       /* Within this returned object, define functions that respond
  //          to request-specific lifecycle events. */
  //       return {
  //         didEncounterErrors(ctx) {
  //           // If we couldn't parse the operation, don't
  //           // do anything here
  //           if (!ctx.operation) {
  //             return;
  //           }

  //           for (const err of ctx.errors) {
  //             // Only report internal server errors,
  //             // all errors extending ApolloError should be user-facing
  //             if (err instanceof ApolloError) {
  //               continue;
  //             }

  //             // Add scoped report details and send to Sentry
  //             Sentry.withScope((scope) => {
  //               // Annotate whether failing operation was query/mutation/subscription
  //               scope.setTag("kind", ctx.operation.operation);

  //               // Log query and variables as extras (make sure to strip out sensitive data!)
  //               scope.setExtra("query", ctx.request.query);
  //               scope.setExtra("variables", ctx.request.variables);

  //               if (err.path) {
  //                 // We can also add the path as breadcrumb
  //                 scope.addBreadcrumb({
  //                   category: "query-path",
  //                   message: err.path.join(" > "),
  //                   level: Sentry.Severity.Debug,
  //                 });
  //               }

  //               const transactionId = ctx.request.http.headers.get(
  //                 "x-transaction-id",
  //               );
  //               if (transactionId) {
  //                 scope.setTransaction(transactionId);
  //               }

  //               Sentry.captureException(err);
  //             });
  //           }
  //         },
  //       };
  //     },
  //   },
  // ],
};
