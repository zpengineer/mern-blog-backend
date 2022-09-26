const express = require('express');
const router = new express.Router();

const {ctrlWrapper, validation, checkAuth} = require('../../middlewares');
const {joiAddPostSchema} = require('../../models/post');
const {posts, comments} = require('../../controllers');

router.get('/', ctrlWrapper(posts.getAll));

router.get('/popular', ctrlWrapper(posts.getAllPopular));

router.get('/tags', ctrlWrapper(posts.getAllTags));

router.get('/tags/:tag', ctrlWrapper(posts.getTagsPosts));

router.get('/:postId', ctrlWrapper(posts.getById));

router.post(
    '/',
    checkAuth,
    validation(joiAddPostSchema),
    ctrlWrapper(posts.addPost),
);

router.delete('/:postId', ctrlWrapper(posts.deletePost));

router.put('/:postId', checkAuth, ctrlWrapper(posts.updatePost));

router.post('/:postId/comment', checkAuth, ctrlWrapper(comments.addComment));

module.exports = router;
