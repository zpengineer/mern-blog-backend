const {Post} = require('../../models');
const {tryCatchWrapper} = require('../../middlewares');

const getAllPopular = tryCatchWrapper(async () => {
  const data = await Post.find()
      .populate('owner', '_id fullName email avatarURL')
      .sort({viewsCount: -1})
      .exec();

  if (data.length === 0) return null;

  return data;
});

module.exports = getAllPopular;
