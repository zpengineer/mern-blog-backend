const {Post} = require('../../models');
const {tryCatchWrapper} = require('../../middlewares');

const getById = tryCatchWrapper(async ({id}) => {
  const data = await Post.findByIdAndUpdate(
      id,
      {$inc: {viewsCount: 1}},
      {returnDocument: 'after'},
  )
      .populate('owner', '_id fullName email avatarURL')
      .populate({
        path: 'comments',
        populate: {path: 'owner', select: '_id fullName email avatarURL'},
      })
      .exec();

  if (!data) {
    return null;
  }

  return data;
});

module.exports = getById;
