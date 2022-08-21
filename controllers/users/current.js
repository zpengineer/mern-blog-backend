const current = async (req, res, next) => {
  const {_id, fullName, email, avatarURL} = req.user;

  res.status(200).json({
    user: {
      id: _id,
      name: fullName,
      email,
      avatarURL,
    },
  });
};

module.exports = current;
