const addPost = require('./addPost');
const getById = require('./getById');
const getAll = require('./getAll');
const deletePost = require('./delete');
const updatePost = require('./update');
const getAllPopular = require('./getAllPopular');
const getAllTags = require('./getAllTags');
const getTagsPosts = require('./getTagsPosts');
const searchPosts = require('./serchPosts');
const subscriptionPosts = require('./subscriptionPosts');
const likePost = require('./likePost');

module.exports = {
  addPost,
  getById,
  getAll,
  deletePost,
  updatePost,
  getAllPopular,
  getAllTags,
  getTagsPosts,
  searchPosts,
  subscriptionPosts,
  likePost,
};
