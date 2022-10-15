const {User} = require('../../models');

const uploadAvatar = async (req, res, next) => {
  const {avatar} = req.body;

  const {_id: id} = req.user;

  await User.findByIdAndUpdate(id, {avatarURL: avatar}, {new: true});

  res.status(200).json({message: 'success'});
};

module.exports = uploadAvatar;
