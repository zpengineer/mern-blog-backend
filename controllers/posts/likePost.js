const {posts: services} = require('../../services');

const likePost = async (req, res, next) => {
  const {postId: id} = req.params;
  const {_id: userId} = req.user;

  const result = await services.likePost({id, userId});

  if (!result) {
    return res.status(404).json({
      message: `Not found post with id: '${id}'`,
    });
  }

  res.json({
    status: 'success',
    code: 200,
  });
};

module.exports = likePost;
