// Require in express to
const express = require("express");
const { ApolloSever } = require("apollo-server-express");
const path = require("path");
const { authMiddleware } = require("./utils/auth");

// require in schemas (typedefs and resolvers)\
const { typeDefs, resolvers } = require("./schemas");

// setup what port it will be running on

// Setup Middleware

// Setup connection to server
