const current = async (req, res, next) => {
  const {fullName, email, avatarURL} = req.user;

  res.status(200).json({
    user: {
      fullName,
      email,
      avatarURL,
    },
  });
};

module.exports = current;
