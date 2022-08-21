const express = require('express');
const router = new express.Router();

const {
  ctrlWrapper,
  validation,
  checkAuth,
} = require('../../middlewares');
const {joiAddPostSchema} = require('../../models/post');
const {posts} = require('../../controllers');

router.get('/', ctrlWrapper(posts.getAll));

router.get('/:postId', ctrlWrapper(posts.getById));

router.post(
    '/',
    checkAuth,
    validation(joiAddPostSchema),
    ctrlWrapper(posts.addPost),
);

router.delete('/:postId', ctrlWrapper(posts.deletePost));

router.put(
    '/:postId',
    checkAuth,
    ctrlWrapper(posts.updatePost),
);

module.exports = router;
