const {Schema, model} = require('mongoose');
const Joi = require('joi');
const bcrypt = require('bcryptjs');

const userSchema =new Schema({
  fullName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  token: {
    type: String,
    default: null,
  },
  avatarURL: {
    type: String,
    required: true,
  },
}, {versionKey: false, timestamps: true});

const joiRegistrationSchema = Joi.object({
  fullName: Joi.string(),
  password: Joi.string()
      .min(6)
      .required(),
  email: Joi.string()
      .email({minDomainSegments: 2, tlds: {allow: ['com', 'net']}})
      .required(),
});

const joiLoginSchema = Joi.object({
  password: Joi.string()
      .min(6)
      .required(),
  email: Joi.string()
      .email({minDomainSegments: 2, tlds: {allow: ['com', 'net']}})
      .required(),
});

userSchema.methods.setPassword = function(password) {
  const salt = bcrypt.genSaltSync(10);
  this.password = bcrypt.hashSync(password, salt);
};

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

const User = model('user', userSchema);

module.exports = {
  User,
  joiRegistrationSchema,
  joiLoginSchema,
};
