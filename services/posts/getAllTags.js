const {Post} = require('../../models');
const {tryCatchWrapper} = require('../../middlewares');

const getAllTags = tryCatchWrapper(async () => {
  const posts = await Post.find();

  const tags = posts
      .flatMap((data) => data.tags)
      .filter((tag, index, array) => array.indexOf(tag) === index);

  return tags;
});

module.exports = getAllTags;
