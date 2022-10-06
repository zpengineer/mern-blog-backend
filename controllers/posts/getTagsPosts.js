const {posts: services} = require('../../services');

const getTagsPosts = async (req, res, next) => {
  const {tag} = req.params;

  const result = await services.getTagsPosts({tag});

  if (!result) {
    return res.json({
      status: 'error',
      code: 404,
      message: `Search by tag: ${tag} returned no results.`,
    });
  }

  res.json({
    status: 'success',
    code: 200,
    posts: result,
  });
};

module.exports = getTagsPosts;
