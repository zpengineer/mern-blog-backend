const {posts: services} = require('../../services');

const updatePost = async (req, res, next) => {
  const {postId: id} = req.params;

  const body = req.body;

  const result = await services.updatePost({id, body});

  if (!result) {
    return res.status(404).json({
      message: `Not found post with id: '${id}'`,
    });
  }

  res.status(200).json({
    data: result,
  });
};

module.exports = updatePost;
