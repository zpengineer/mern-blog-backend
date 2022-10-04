const {User, Post} = require('../../models');

const author = async (req, res, next) => {
  const {postId} = req.params;

  const {owner} = await Post.findById(postId);

  const {_id, fullName, avatarURL, following, followers} =
		await User.findById(owner);

  res.json({
    status: 'success',
    code: 200,
    author: {
      id: _id,
      name: fullName,
      avatar: avatarURL,
      following: following,
      followers: followers,
    },
  });
};

module.exports = author;
