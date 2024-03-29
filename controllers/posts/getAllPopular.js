const {posts: services} = require('../../services');

const getAllPopular = async (req, res, next) => {
  const result = await services.getAllPopular();

  if (!result) {
    return res.json({
      status: 'error',
      code: 404,
      message: `The blog is empty, register and create content`,
    });
  }

  res.json({
    status: 'success',
    code: 200,
    posts: result,
  });
};

module.exports = getAllPopular;
