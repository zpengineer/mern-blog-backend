const {Post} = require('../../models');
const {tryCatchWrapper} = require('../../middlewares');

const updatePost = tryCatchWrapper(async ({id, body}) => {
  const data = await Post.findByIdAndUpdate(id, body, {new: true});

  if (!data) {
    return null;
  }

  return data;
});

module.exports = updatePost;
