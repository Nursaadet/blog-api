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
        // User: OK.

        if (user.password == passwordEncrypt(password)) {
          // Password:OK

          /* SESSION */
          // req.session = {
          //     email: user.email,
          //     password: user.password
          // }
          req.session.email = user.email;
          req.session.password = user.password;
          /* SESSION */

          res.status(200).send({
            error: false,
            message: "Login: OK",
            user,
          });
        } else {
          res.errorStatusCode = 401;
          throw new Error("Login parameters are not true.");
        }
      } else {
        res.errorStatusCode = 401;
        throw new Error("This user not found.");
      }
    } else {
      res.errorStatusCode = 401;
      throw new Error("Email and password are required.");
    }
  },

  logout: async (req, res) => {},
};

/* ------------------------------------------------------- */
