"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
// Call Models:
const { BlogCategory, BlogPost } = require('../models/blogModel')

/* ------------------------------------------------------- */
// BlogCategory Controller:

module.exports.blogCategory = {

    create: async (req, res) => {

        res.send('create method')

    }

}

/* ------------------------------------------------------- */
// BlogPost Controller:

module.exports.blogPost = {
    
}

/* ------------------------------------------------------- */
