const {Comment} = require('../../models');
const {tryCatchWrapper} = require('../../middlewares');

const likeComment = tryCatchWrapper(async ({id, userId}) => {
  const data = await Comment.findByIdAndUpdate(
      id,
      {$addToSet: {like: userId}},
      {new: true},
  );

  if (!data) {
    return null;
  }

  return data;
});

module.exports = likeComment;
