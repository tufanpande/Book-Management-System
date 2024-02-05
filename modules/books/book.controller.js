const bookModel = require("./book.model");

// Create
const create = (payload) => {
  return bookModel.create(payload);
};

// Read - Get all blogs
const get = () => {
  return bookModel.find();
};

// Read - Get a specific blog by ID
const getById = (_id) => {
  return bookModel.findOne(_id);
};

// Update - Update a blog by ID
const updateById = (_id, payload) => {
  return bookModel.updateOne(_id, payload, { new: true });
};

// Delete - Delete a blog by ID
const removeById = (_id) => {
  return bookModel.deleteOne(_id);
};

module.exports = { create, get, getById, updateById, removeById };