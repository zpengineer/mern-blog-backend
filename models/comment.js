const {Schema, model} = require('mongoose');
const Joi = require('joi');

const commentShema = new Schema(
    {
      content: {
        type: String,
        required: true,
      },
      post: {
        type: Schema.Types.ObjectId,
        ref: 'post',
      },
      owner: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    },
    {versionKey: false, timestamps: true},
);

const joiAddCommentSchema = Joi.object({
  content: Joi.string().required(),
});

const Comment = model('comment', commentShema);

module.exports = {Comment, joiAddCommentSchema};
