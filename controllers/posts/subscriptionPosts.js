const {posts: services} = require('../../services');

const subscriptionPosts = async (req, res, next) => {
  const {following} = req.user;

  const posts = await services.subscriptionPosts({following});

  if (!posts) {
    return res.json({
      status: 'error',
      code: 404,
      message: `Want to be the first to know about new content? 
      Subscribe to your favorite author.`,
    });
  }

  res.json({
    status: 'success',
    code: 200,
    posts,
  });
};

module.exports = subscriptionPosts;
