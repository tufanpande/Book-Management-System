const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
  id: { type: Number, require: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishedDate: { type: Date, default: Date.now() },
    createdAt: { type: Date, default: Date.now() }, 
  updatedAt: { type: Date, default: Date.now() },
});

module.exports = model("Book", bookSchema);