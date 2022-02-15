const mongoose = require('mongoose');

const imageSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    image: {
      type: String,
      default: 'no-photo.jpg',
    },
    text: {
      type: String,
      required: [true, 'Please add a text value'],
    },
    location: {
      type: String,
    },
    colour: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  'Image',
  imageSchema
);
// brings in user schema from userModel.js makes use of the id so we know who has access to the information
