"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
const { User } = require("../models/userModel");
const passwordEncrypt = require("../helpers/passwordEncrypt");
/* ------------------------------------------------------- */
// Auth Controller:

module.exports.auth = {
  login: async (req, res) => {
    const { email, password } = req.body;

    if (email && password) {
      // Email&Password: OK
      // const user = await User.findOne({ email: email })
      const user = await User.findOne({ email });

      if (user) {
      }
    } else {
      res.errorStatusCode = 401;
      throw new Error("Email and password are required.");
    }
  },

  logout: async (req, res) => {},
};

/* ------------------------------------------------------- */
