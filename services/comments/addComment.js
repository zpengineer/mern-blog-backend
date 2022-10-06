const {Comment, Post} = require('../../models');
const {tryCatchWrapper} = require('../../middlewares');

const addComment = tryCatchWrapper(async ({id, postId, body}) => {
  const comment = await Comment.create({...body, owner: id, post: postId});
  await Post.findByIdAndUpdate(
      postId,
      {$push: {comments: comment}},
      {new: true},
  );

  return comment;
});

module.exports = addComment;
