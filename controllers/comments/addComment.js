const {comments: services} = require('../../services');

const addComment = async (req, res, next) => {
  const {_id: id} = req.user;
  const {postId} = req.params;
  const body = req.body;

  const comment = await services.addComment({id, postId, body});

  res.json({
    status: 'success',
    code: 200,
    comment,
  });
};

module.exports = addComment;
