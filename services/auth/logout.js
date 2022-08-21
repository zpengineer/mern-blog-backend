const {User} = require('../../models');
const {tryCatchWrapper} = require('../../middlewares');

const logout = tryCatchWrapper(async ({id}) => {
  const user = await User.findById(id);
  if (!user) {
    return null;
  }

  await User.findByIdAndUpdate(id, {token: null});

  return user;
});

module.exports = logout;
