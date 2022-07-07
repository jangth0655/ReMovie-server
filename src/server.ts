import "dotenv/config";
import { ApolloServer } from "apollo-server";
import { resolvers, typeDefs } from "./schema";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
});

server.listen().then(({ url }) => {
  console.log(`Running on ${url}`);
});
