const {comments: services} = require('../../services');

const dislikeComment = async (req, res, next) => {
  const {postId: id} = req.params;
  const {_id: userId} = req.user;

  const result = await services.dislikeComment({id, userId});

  if (!result) {
    return res.status(404).json({
      message: `Not found comment with id: '${id}'`,
    });
  }

  res.json({
    status: 'success',
    code: 200,
  });
};

module.exports = dislikeComment;
