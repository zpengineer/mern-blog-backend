const {Comment} = require('../../models');

const getAllComments = async (req, res, next) => {
  const comments = await Comment.find()
      .populate('owner', '_id fullName email avatarURL')
      .populate('post', 'title')
      .sort({createdAt: -1})
      .limit(3)
      .exec();

  res.json({
    status: 'success',
    code: 200,
    comments,
  });
};

module.exports = getAllComments;
