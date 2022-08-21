const {Post} = require('../../models');
const {tryCatchWrapper} = require('../../middlewares');

const deletePost = tryCatchWrapper(async ({id}) => {
  const data = await Post.findByIdAndRemove(id);

  if (!data) {
    return null;
  }

  return data;
});

module.exports = deletePost;
