const {Post} = require('../../models');
const {tryCatchWrapper} = require('../../middlewares');

const getById = tryCatchWrapper(async ({id}) => {
  const data = await Post.findByIdAndUpdate(
      id,
      {$inc: {viewsCount: 1}},
      {returnDocument: 'after'},
  )
      .populate('owner', '_id fullName email avatarURL following followers')
      .exec();

  if (!data) {
    return null;
  }

  return data;
});

module.exports = getById;
