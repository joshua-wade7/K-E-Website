const jwt = require("jsonwebtoken");

const secret = "mysecretssssshhhhhhhh";
const expiration = "6h";

module.exports = {
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authroization;

    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    if (!token) {
      return req;
    }
  },
};
