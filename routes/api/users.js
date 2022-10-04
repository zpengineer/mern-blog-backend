const express = require('express');
const router = new express.Router();

const {ctrlWrapper, checkAuth, upload} = require('../../middlewares');
const {users} = require('../../controllers');

router.get('/current', checkAuth, ctrlWrapper(users.current));

router.get('/author/:postId', ctrlWrapper(users.author));

router.patch(
    '/avatars',
    checkAuth,
    upload.single('avatar'),
    ctrlWrapper(users.uploadAvatar),
);

router.patch('/follow/:id', checkAuth, ctrlWrapper(users.follow));

router.patch('/unfollow/:id', checkAuth, ctrlWrapper(users.unFollow));

module.exports = router;
