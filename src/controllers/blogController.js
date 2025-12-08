"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
// Call Models:
const { BlogCategory, BlogPost } = require("../models/blogModel");

/* ------------------------------------------------------- */
// BlogCategory Controller:

module.exports.blogCategory = {
  list: async (req, res) => {
    const data = await BlogCategory.find();

    res.status(200).send({
      error: false,
      result: data,
    });
  },

  // CRUD ->

  create: async (req, res) => {
    const data = await BlogCategory.create(req.body);
    // console.log(data)

    res.status(201).send({
      error: false,
      result: data,
    });
  },

  read: async (req, res) => {
    // const categoryId = req.params.categoryId;
    // const data = await BlogCategory.findOne({ _id: categoryId });
    // const data = await BlogCategory.findOById({ req.params.categoryId });
    // const data = await BlogCategory.findOne({ ...filter});
    const data = await BlogCategory.findOne({ _id: req.params.categoryId });

    res.status(200).send({
      error: false,
      result: data,
    });
  },

  update: async (req, res) => {
    // const data = await BlogCategory.UpdateOne({...filter}, {...data})
    const data = await BlogCategory.UpdateOne(
      { _id: req.params.categoryId },
      req.body
    );
    //  const data = await BlogCategory.findByIdAndUpdate( req.params.categoryId, req.body)

    res.status(202).send({
      error: false,
      result: data,
      new: await BlogCategory.findOne({ _id: req.params.categoryId }),
    });
  },

  delete: async (req, res) => {
    const data = await BlogCategory.deleteOne({ _id: req.params.categoryId });
    console.log(data);

    // res.status(204).send({
    //   error: false,
    //   result: data,

    // })
    if (data.deletedCount > 0) {
      res.status(204);
    } else {
      res.errorStatusCode = 404;
      throw new Error("Not found");
      error: true;
    }
  },
};

/* ------------------------------------------------------- */
// BlogPost Controller:

module.exports.blogPost = {
  list: async (req, res) => {
    const data = await BlogPost.find();

    res.status(200).send({
      error: false,
      result: data,
    });
  },

  // CRUD ->

  create: async (req, res) => {
    const data = await BlogPost.create(req.body);
    

    res.status(201).send({
      error: false,
      result: data,
    });
  },

  read: async (req, res) => {
    const data = await BlogPost.findOne({ _id: req.params.postId });

    res.status(200).send({
      error: false,
      result: data,
    });
  },

  update: async (req, res) => {
    const data = await BlogPost.UpdateOne(
      { _id: req.params.postId },
      req.body
    );

    res.status(202).send({
      error: false,
      result: data,
      new: await BlogPost.findOne({ _id: req.params.postId }),
    });
  },

  delete: async (req, res) => {
    const data = await BlogPost.deleteOne({ _id: req.params.postId });
    console.log(data);

    // })
    if (data.deletedCount > 0) {
      res.status(204);
    } else {
      res.errorStatusCode = 404;
      throw new Error("Not found");
      error: true;
    }
  },
};

/* ------------------------------------------------------- */
