const express = require('express');
const router = new express.Router();

const {ctrlWrapper, validation, checkAuth} = require('../../middlewares');
const {joiRegistrationSchema, joiLoginSchema} = require('../../models/User');
const {auth} = require('../../controllers');

router.post(
    '/singup',
    validation(joiRegistrationSchema),
    ctrlWrapper(auth.singup),
);

router.post('/singin', validation(joiLoginSchema), ctrlWrapper(auth.singin));

router.post('/logout', checkAuth, ctrlWrapper(auth.logout));

module.exports = router;
