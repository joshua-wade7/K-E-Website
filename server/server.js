// Require in express to
const express = require("express");
const { ApolloSever } = require("apollo-server-express");
const path = require("path");
const { authMiddleware } = require("./utils/auth");

// require in schemas (typedefs and resolvers)\
const { typeDefs, resolvers } = require("./schemas");

// setup what port it will be running on
const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resovlers,
  context: authMiddleware,
});

// Setup Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Setup connection to server
