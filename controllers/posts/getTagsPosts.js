const {posts: services} = require('../../services');

const getTagsPosts = async (req, res, next) => {
  const {tag} = req.params;

  const result = await services.getTagsPosts({tag});

  res.json({
    status: 'success',
    code: 200,
    posts: result,
  });
};

module.exports = getTagsPosts;
