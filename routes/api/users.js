const express = require('express');
const router = new express.Router();

const {ctrlWrapper, checkAuth, upload} = require('../../middlewares');
const {users} = require('../../controllers');

router.get('/current', checkAuth, ctrlWrapper(users.current));

router.patch(
    '/avatars',
    checkAuth,
    upload.single('avatar'),
    ctrlWrapper(users.uploadAvatar),
);

module.exports = router;
