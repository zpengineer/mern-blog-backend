const {posts: services} = require('../../services');

const getAll = async (req, res, next) => {
  const result = await services.getAll();

  res.json({
    status: 'success',
    code: 200,
    posts: result,
  });
};

module.exports = getAll;
