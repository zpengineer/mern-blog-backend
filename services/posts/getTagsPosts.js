const {Post} = require('../../models');
const {tryCatchWrapper} = require('../../middlewares');

const getTagsPosts = tryCatchWrapper(async ({tag}) => {
  let posts = await Post.aggregate([
    {
      $match: {
        tags: tag,
      },
    },
  ]);

  const populateQuery = [
    {
      path: 'owner',
      select: '_id fullName email avatarURL',
    },
  ];

  posts = await Post.populate(posts, populateQuery);

  if (posts.length === 0) return null;

  return posts;
});

module.exports = getTagsPosts;
