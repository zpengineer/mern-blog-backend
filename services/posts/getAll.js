const {Post} = require('../../models');
const {tryCatchWrapper} = require('../../middlewares');

const getAll = tryCatchWrapper(async () => {
  const data = await Post.find()
      .populate('owner', '_id fullName email avatarURL')
      .sort({createdAt: -1})
      .exec();

  return data;
});

module.exports = getAll;
