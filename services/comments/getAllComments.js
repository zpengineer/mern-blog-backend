const {Comment} = require('../../models');
const {tryCatchWrapper} = require('../../middlewares');

const getAllComments = tryCatchWrapper(async (req, res, next) => {
  const comments = await Comment.find()
      .populate('owner', '_id fullName email avatarURL')
      .populate('post', 'title')
      .sort({createdAt: -1})
      .limit(3)
      .exec();

  if (comments.length === 0) return null;

  return comments;
});

module.exports = getAllComments;
