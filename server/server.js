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

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// Setup connection to server
