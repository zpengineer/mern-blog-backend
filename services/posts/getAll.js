const {Post} = require('../../models');
const {tryCatchWrapper} = require('../../middlewares');

const getAll = tryCatchWrapper(async () => {
  const data = await Post.find()
      .populate('owner', '_id fullName email avatarURL')
      .exec();

  return data;
});

module.exports = getAll;
