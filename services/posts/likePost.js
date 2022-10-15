const {Post} = require('../../models');
const {tryCatchWrapper} = require('../../middlewares');

const likePost = tryCatchWrapper(async ({id, userId}) => {
  const data = await Post.findByIdAndUpdate(
      id,
      {$addToSet: {like: userId}},
      {new: true},
  );

  if (!data) {
    return null;
  }

  return data;
});

module.exports = likePost;
