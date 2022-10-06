const {comments: services} = require('../../services');

const getAllComments = async (req, res, next) => {
  const comments = await services.getAllComments();

  if (!comments) {
    res.json({
      status: 'error',
      code: 404,
      message: 'No Comments yet, your thoughts are welcome',
    });
  }

  res.json({
    status: 'success',
    code: 200,
    comments,
  });
};

module.exports = getAllComments;
