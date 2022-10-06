const {Post} = require('../../models');
const {tryCatchWrapper} = require('../../middlewares');

const subscriptionPosts = tryCatchWrapper(async ({following}) => {
  const posts = await Post.find({owner: {$in: following}})
      .populate('owner', '_id fullName email avatarURL')
      .sort({createdAt: -1})
      .exec();

  if (posts.length === 0) {
    return null;
  }

  return posts;
});

module.exports = subscriptionPosts;
