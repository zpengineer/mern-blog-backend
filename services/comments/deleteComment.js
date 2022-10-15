const {Comment, Post} = require('../../models');
const {tryCatchWrapper} = require('../../middlewares');

const deleteComment = tryCatchWrapper(async ({id, postId}) => {
  const data = await Comment.findByIdAndRemove(id);

  await Post.updateOne(
      {_id: postId},
      {$pull: {comments: id}},
      {new: true},
  );

  if (!data) {
    return null;
  }

  return data;
});

module.exports = deleteComment;
