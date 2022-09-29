const {Comment} = require('../../models');

const getPostComments = async (req, res, next) => {
  const {postId} = req.params;

  const comments = await Comment.find({post: {_id: postId}})
      .populate('owner', '_id fullName email avatarURL')
      .sort({createdAt: -1})
      .exec();

  res.json({
    status: 'success',
    code: 200,
    comments,
  });
};

module.exports = getPostComments;
