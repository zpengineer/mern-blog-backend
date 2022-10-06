const {comments: services} = require('../../services');

const getPostComments = async (req, res, next) => {
  const {postId} = req.params;

  const comments = await services.getPostComments({postId});

  console.log(comments);
  if (!comments) {
    res.json({
      status: 'error',
      code: 404,
      message: 'Be the first to comment on the post!',
    });
  }

  res.json({
    status: 'success',
    code: 200,
    comments,
  });
};

module.exports = getPostComments;
