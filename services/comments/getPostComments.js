const {Comment} = require('../../models');
const {tryCatchWrapper} = require('../../middlewares');

const getPostComments = tryCatchWrapper(async ({postId}) => {
  const comments = await Comment.find({post: {_id: postId}})
      .populate('owner', '_id fullName email avatarURL')
      .sort({createdAt: -1})
      .exec();

  if (comments.length === 0) return null;

  return comments;
});

module.exports = getPostComments;
