const {Post} = require('../../models');
const {tryCatchWrapper} = require('../../middlewares');

const getAllPopular = tryCatchWrapper(async () => {
  const data = await Post.find().sort({viewsCount: -1}).exec();

  return data;
});

module.exports = getAllPopular;
