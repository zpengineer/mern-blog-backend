const {posts: services} = require('../../services');

const getAllTags = async (req, res, next) => {
  const result = await services.getAllTags();

  if (!result) {
    return res.json({
      status: 'error',
      code: 404,
      message: `Blog has no tags.`,
    });
  }

  res.json({
    status: 'success',
    code: 200,
    posts: result,
  });
};

module.exports = getAllTags;
