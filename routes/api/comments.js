const express = require('express');
const router = new express.Router();

const {ctrlWrapper, checkAuth} = require('../../middlewares');
const {comments} = require('../../controllers');

router.get('/', ctrlWrapper(comments.getAllComments));

router.get('/:postId', ctrlWrapper(comments.getPostComments));

router.post('/:postId', checkAuth, ctrlWrapper(comments.addComment));

router.delete('/:id', checkAuth, ctrlWrapper(comments.deleteComment));

router.patch('/like/:postId', checkAuth, ctrlWrapper(comments.likeComment));

router.patch(
    '/dislike/:postId',
    checkAuth,
    ctrlWrapper(comments.dislikeComment),
);

module.exports = router;
