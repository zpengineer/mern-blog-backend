const current = async (req, res, next) => {
  const {_id, fullName, email, avatarURL, following, followers} = req.user;

  res.status(200).json({
    user: {
      id: _id,
      name: fullName,
      email,
      following,
      followers,
      avatarURL,
    },
  });
};

module.exports = current;
