const {auth: services} = require('../../services');

const singup = async (req, res, next) => {
  const {fullName, email, password} = req.body;

  const result = await services.singup({fullName, email, password});

  if (!result) {
    return res.status(409).json({
      message: 'Email in use',
    });
  }

  res.status(201).json({
    fullName: result.fullName,
    avatarUrl: result.avatarURL,
  });
};

module.exports = singup;
