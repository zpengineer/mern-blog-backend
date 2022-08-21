const {Post} = require('../../models');
const {tryCatchWrapper} = require('../../middlewares');

const getById = tryCatchWrapper(async ({id}) => {
  const data = await Post
      .findByIdAndUpdate(
          id,
          {$inc: {viewsCount: 1}},
          {returnDocument: 'after'});

  if (!data) {
    return null;
  }

  return data;
});

module.exports = getById;
