const {cloudinary} = require('../../utils/cloudinary');
const {User} = require('../../models');

const uploadAvatar = async (req, res, next) => {
  const {path: tmpUpload} = req.file;

  const {_id: id} = req.user;
  const userFolder = `avatars/${id}`;

  try {
    const uploadResponse = await cloudinary.uploader.upload(tmpUpload, {
      folder: userFolder,
      transformation: {width: 250, height: 250, crop: 'fill'},
    });

    await User.findByIdAndUpdate(id, {avatarURL: uploadResponse.secure_url});

    res.status(200).json({avatarURL: uploadResponse.secure_url});
  } catch (error) {
    await fs.unlink(tmpUpload);
    next(error);
  }
};

module.exports = uploadAvatar;
