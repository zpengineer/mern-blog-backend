const {posts: services} = require('../../services');

const getAllPopular = async (req, res, next) => {
  const result = await services.getAllPopular();

  res.json({
    status: 'success',
    code: 200,
    posts: result,
  });
};

module.exports = getAllPopular;
