import "dotenv/config";
import { ApolloServer } from "apollo-server-express";
import { resolvers, typeDefs } from "./schema";
import {
  ApolloServerPluginLandingPageDisabled,
  ApolloServerPluginLandingPageGraphQLPlayground,
} from "apollo-server-core";
import express from "express";
import http from "http";

const PORT = process.env.PORT;

async function startApolloServer() {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginLandingPageDisabled()],
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
startApolloServer();

/*   server.listen().then(({ url }) => {
    console.log(`Running on ${url}`);
  }); */
