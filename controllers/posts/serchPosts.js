const {Post} = require('../../models');
// const { posts: services } = require('../../services');

const searchPosts = async (req, res, next) => {
  const {query} = req.query;

  console.log(query);

  const posts = await Post.find({title: {$regex: query, $options: 'i'}})
      .populate('owner', '_id fullName email avatarURL following followers')
      .exec();

  if (posts.length === 0) {
    return res.status(404).json({
      message: `Not found posts with search query: '${query}'`,
    });
  }

  res.json({
    status: 'success',
    code: 200,
    posts,
  });
};

module.exports = searchPosts;
