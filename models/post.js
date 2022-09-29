const {Schema, model} = require('mongoose');
const Joi = require('joi');

const postSchema = new Schema(
    {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
        unique: true,
      },
      tags: {
        type: Array,
        default: [],
      },
      viewsCount: {
        type: Number,
        default: 0,
      },
      owner: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true,
      },
      imgUrl: String,
    },
    {versionKey: false, timestamps: true},
);

const joiAddPostSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  tags: Joi.array().items(Joi.string()),
  viewsCount: Joi.number(),
  imgUrl: Joi.string(),
});

const Post = model('post', postSchema);

module.exports = {
  Post,
  joiAddPostSchema,
};
