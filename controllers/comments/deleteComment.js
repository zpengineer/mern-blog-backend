const {comments: services} = require('../../services');

const deletePost = async (req, res, next) => {
  const {id} = req.params;
  const {postId} = req.body;

  const result = await services.deleteComment({id, postId});

  if (!result) {
    return res.status(404).json({
      message: `Not found comment with id: '${id}'`,
    });
  }

  res.status(200).json({
    message: 'Comment deleted',
  });
};

module.exports = deletePost;
