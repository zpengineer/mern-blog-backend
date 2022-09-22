const {posts: services} = require('../../services');

const getAllTags = async (req, res, next) => {
  const result = await services.getAllTags();

  res.json({
    status: 'success',
    code: 200,
    posts: result,
  });
};

module.exports = getAllTags;
