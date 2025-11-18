"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
// Mongoose:

const mongoose = require("mongoose");

// const ModelName = new mongoose.Schema({ ...fields }, { ...settings })
const ModelName = new mongoose.Schema(
  {
    // PrimaryKey (_id) tanımlamaya gerek yoktur. Otomatik tanımlanır.
    // _id: Number

    fieldName: {
      type: Number,
      default: null, // Veri gelmediğinde yazılacak veri.
      trim: true, // Başındaki/sonundaki boşlukları kırpar.
      unique: true, // Benzersiz kayıt.
      index: true, // Aramalarda hızlı erişim sağlar.
      // required: true, // Veri gönderimi zorunlu mu?
      required: [true, "Bu data mutlaka gönderilmelidir."], // [Veri gönderimi zorunlu mu?, HATA MESAJI]
      // enum: ['1', '2', '3']
      // enum: [1, 2, 3] // Belirli değerlerden biri olmak zorunda.
      enum: [[1, 2, 3], "Bu değerlerden biri olmalıdır."], // Belirli değerlerden biri olmak zorunda.
    },
  },
  { ...settings }
);

/* ------------------------------------------------------- */
// BlogCategory Model:

/* ------------------------------------------------------- */
