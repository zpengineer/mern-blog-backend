const {posts: services} = require('../../services');

const deletePost = async (req, res, next) => {
  const {postId: id} = req.params;

  const result = await services.deletePost({id});

  if (!result) {
    return res.status(404).json({
      message: `Not found post with id: '${id}'`,
    });
  }

  res.status(200).json({
    message: 'Post deleted',
  });
};

module.exports = deletePost;
