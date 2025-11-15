"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

//mongoose
// $ npm i mongoose

const mongoose = require("mongoose");
const dbConnection = () => {
  mongoose.connect(process.env?.MONGOURL || "mongodb://localhost:27017/blog-api")

    .then(() => console.log("MongoDB connected successfully."))
    .catch(() => console.log("MongoDB connection failed."))
    
};
