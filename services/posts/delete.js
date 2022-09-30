const {Post, Comment} = require('../../models');
const {tryCatchWrapper} = require('../../middlewares');

const deletePost = tryCatchWrapper(async ({id}) => {
  const data = await Post.findByIdAndRemove(id);
  await Comment.deleteMany({post: {_id: id}});

  if (!data) {
    return null;
  }

  return data;
});

module.exports = deletePost;
