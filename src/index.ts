import { ApolloServer } from "apollo-server";
import api from "./api";

const apolloServer = new ApolloServer(api);
apolloServer.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
