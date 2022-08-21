const gravatar = require('gravatar');

const {User} = require('../../models');
const {tryCatchWrapper} = require('../../middlewares');

const singup = tryCatchWrapper(async ({fullName, password, email}) => {
  const user = await User.findOne({email});

  if (user) {
    return null;
  }

  const avatarURL = gravatar.url(email);

  const newUser = new User({fullName, email, avatarURL});
  newUser.setPassword(password);

  const savedUser = await newUser.save();

  return savedUser;
});

module.exports = singup;
