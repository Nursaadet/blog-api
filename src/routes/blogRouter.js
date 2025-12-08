"use strtict"
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const router = require('express').Router()

// Call Controllers:
const { blogCategory, blogPost } = require('../controllers/blogController')


/* ------------------------------------------------------- */

// URL: /blog ->

// BlogCategory
router.route('/category')
    .get(blogCategory.list)
    .post(blogCategory.create)


    router.route('/category/:categoryId')
    .get(blogCategory.read)
    .put(blogCategory.update)
    .patch(blogCategory.update)
    .delete(blogCategory.delete);
/* ------------------------------------------------------- */
module.exports = router