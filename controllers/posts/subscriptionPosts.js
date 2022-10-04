const {Post} = require('../../models');

const subscriptionPosts = async (req, res, next) => {
  const {following} = req.user;

  const posts = await Post.find({owner: {$in: following}})
      .sort({createdAt: -1})
      .exec();

  res.json({
    status: 'success',
    code: 200,
    posts,
  });
};

module.exports = subscriptionPosts;
