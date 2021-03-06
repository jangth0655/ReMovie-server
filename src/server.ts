import "dotenv/config";
import { ApolloServer } from "apollo-server";
import { resolvers, typeDefs } from "./schema";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import express from "express";
import http from "http";
//import { InMemoryLRUCache } from "@apollo/utils.keyvaluecache";
//import { ApolloServer } from "apollo-server-express";

const PORT = process.env.PORT;

/* async function startApolloServer() {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    introspection: true,
  });
  await server.start();
  server.applyMiddleware({ app });

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: PORT }, resolve)
  );
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  );
}
startApolloServer(); */

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cache: "bounded",
  csrfPrevention: true,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  introspection: true,
});

server.listen({ port: PORT || 4000 }).then(({ url }) => {
  console.log(`Running on ${url}`);
});
