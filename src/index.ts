import { ApolloServer } from "apollo-server";
import { PrismaClient } from "@prisma/client";
import api from "./api";
const prisma = new PrismaClient();

const apolloServer = new ApolloServer(api);
apolloServer.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
