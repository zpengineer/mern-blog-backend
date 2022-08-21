const {posts: services} = require('../../services');

const addPost = async (req, res, next) => {
  const {_id: id} = req.user;
  const body = req.body;

  const result = await services.addPost({id, body});

  res.status(201).json({
    posts: result,
  });
};

module.exports = addPost;
