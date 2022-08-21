const jwt = require('jsonwebtoken');

const {User} = require('../../models');
const {tryCatchWrapper} = require('../../middlewares');

const {SECRET_KEY} = process.env;

const singin = tryCatchWrapper(async ({email, password}) => {
  const user = await User.findOne({email});

  if (!user || !user.validPassword(password)) {
    return null;
  }

  const payload = {
    id: user._id,
  };

  const token = jwt.sign(payload, SECRET_KEY, {expiresIn: '24h'});

  await User.findByIdAndUpdate(user._id, {token});

  return {user, token};
});

module.exports = singin;
