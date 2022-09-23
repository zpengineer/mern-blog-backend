const addPost = require('./addPost');
const getById = require('./getById');
const getAll = require('./getAll');
const deletePost = require('./delete');
const updatePost = require('./update');
const getAllPopular = require('./getAllPopular');
const getAllTags = require('./getAllTags');
const getTagsPosts = require('./getTagsPosts');

module.exports = {
  addPost,
  getById,
  getAll,
  deletePost,
  updatePost,
  getAllPopular,
  getAllTags,
  getTagsPosts,
};
