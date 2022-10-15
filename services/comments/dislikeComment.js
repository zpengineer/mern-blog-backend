const {Comment} = require('../../models');
const {tryCatchWrapper} = require('../../middlewares');

const dislikeComment = tryCatchWrapper(async ({id, userId}) => {
  const data = await Comment.findByIdAndUpdate(
      id,
      {$addToSet: {dislike: userId}},
      {new: true},
  );

  if (!data) {
    return null;
  }

  return data;
});

module.exports = dislikeComment;
