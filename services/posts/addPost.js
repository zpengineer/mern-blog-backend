const {Post} = require('../../models');
const {tryCatchWrapper} = require('../../middlewares');

const addPost = tryCatchWrapper(async ({id, body}) => {
  const data = await Post.create({...body, owner: id});

  return data;
});

module.exports = addPost;
