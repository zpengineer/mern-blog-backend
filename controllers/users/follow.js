const {User} = require('../../models');

const follow = async (req, res, next) => {
  const {_id: userId} = req.user;
  const {id: followingId} = req.params;

  if (userId === followingId) {
    return res.status(400).json({error: 'You cannot follow yourself'});
  }

  await User.findByIdAndUpdate(
      userId,
      {$addToSet: {following: followingId}},
      {new: true},
  );

  await User.findByIdAndUpdate(
      followingId,
      {$addToSet: {followers: userId}},
      {new: true},
  );

  res.json({
    status: 'success',
    code: 200,
  });
};

module.exports = follow;
