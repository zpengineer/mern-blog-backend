const {User} = require('../../models');

const unFollow = async (req, res, next) => {
  const {_id: userId} = req.user;
  const {id: followingId} = req.params;

  if (userId === followingId) {
    return res.status(400).json({error: 'You cannot follow yourself'});
  }

  const user = await User.updateOne(
      {_id: userId},
      {$pull: {following: followingId}},
      {new: true},
  );

  await User.updateOne(
      {_id: followingId},
      {$pull: {followers: userId}},
      {new: true},
  );

  res.json({
    status: 'success',
    code: 200,
    user: {
      following: user.following,
    },
  });
};

module.exports = unFollow;
