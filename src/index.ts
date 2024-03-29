import dotEnv from "dotenv";
import findConfig from "find-config";
import helmet from "helmet";
import checkJwt from "./middleware";
dotEnv.config({ path: findConfig(`.env`)! });
import Sentry = require("@sentry/node");

import { ApolloServer } from "apollo-server-express";
import {
  GraphQLUpload,
  graphqlUploadExpress, // A Koa implementation is also exported.
} from "graphql-upload";

import express from "express";
import api from "./api";

const app: express.Application = express();

const path = "/graphql";

//  sentry setup
Sentry.init({ dsn: process.env.SENTRY_DSN });
app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.errorHandler());
app.use(function onError(err, req, res, next) {
  res.statusCode = 500;
  res.end(res.sentry + "\n");
});
const server = async () => {
  app.use(graphqlUploadExpress());
  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true,
    })
  );
  const apolloServer = new ApolloServer(api);

  await apolloServer.start();
  app.use(helmet());
  app.use(path, (req, res, next) => checkJwt(req, res, next));
  apolloServer.applyMiddleware({ app, path });

  const HOSTNAME = process.env.HOSTNAME || "localhost";
  const PORT = Number(process.env.PORT) || 4000;

  const server = app.listen(PORT, HOSTNAME, () => {
    const address = server.address();
    const origin = !address
      ? "unknown address"
      : typeof address === "string"
      ? address
      : "http://" + address.address + ":" + address.port;

    console.info(`\nExpress server listening at ${origin}`);
    console.info(
      `\nGraphQL ready at ${address ? origin : ""}${apolloServer.graphqlPath}`
    );
  });
};

server();
