const {posts: services} = require('../../services');

const searchPosts = async (req, res, next) => {
  const {query} = req.query;

  const posts = await services.searchPosts({query});

  if (!posts) {
    return res.json({
      status: 'error',
      code: 404,
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
