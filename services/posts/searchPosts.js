const {Post} = require('../../models');
const {tryCatchWrapper} = require('../../middlewares');

const searchPosts = tryCatchWrapper(async ({query}) => {
  const posts = await Post.find({title: {$regex: query, $options: 'i'}})
      .populate('owner', '_id fullName email avatarURL following followers')
      .exec();

  if (posts.length === 0) {
    return null;
  }

  return posts;
});

module.exports = searchPosts;
