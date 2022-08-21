const {auth: services} = require('../../services');

const singin = async (req, res, next) => {
  const {email, password} = req.body;

  const {user, token} = await services.singin({email, password});

  if (!user) {
    return res.status(409).json({
      message: 'Email in use',
    });
  }

  res.status(201).json({
    user: {
      email: user.email,
      token: token,
    },
  });
};

module.exports = singin;
