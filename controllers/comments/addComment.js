const {Post, Comment} = require('../../models');

const addComment = async (req, res, next) => {
  const {_id: id} = req.user;
  const {postId} = req.params;
  const body = req.body;

  const comment = await Comment.create({...body, owner: id, post: postId});
  await Post.findByIdAndUpdate(
      postId,
      {$push: {comments: comment}},
      {new: true},
  );

  res.json({
    status: 'success',
    code: 200,
    comment,
  });
};

module.exports = addComment;
