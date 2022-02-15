const asyncHandler = require('express-async-handler');

const Image = require('../models/imageModel');
const User = require('../models/userModel')

// @desc    Get images
// @route   GET /api/images
// @access  Private
const getImages = asyncHandler(
  async (req, res) => {
    const images = await Image.find({
      user: req.user.id,
    });

    res
      .status(200)
      .json({
        image_count: images.length,
        images,
      });
  }
);

// @desc    upload images
// @route   POST /api/images
// @access  Private
const uploadImage = asyncHandler(
  async (req, res) => {
    if (!req.body.text || !req.body.image) {
      res.status(400);
      throw new Error(
        'Please add a image and text field'
      );
    }

    const image = await Image.create({
      image: req.body.image,
      text: req.body.text,
      location: req.body.location,
      colour: req.body.colour,
      user: req.user.id,
    });
    res.status(200).json(image);
  }
);

// @desc    update image
// @route   PUT /api/images/:id
// @access  Private
const updateImage = asyncHandler(
  async (req, res) => {
    const image = await Image.findById(
      req.params.id
    );

    if (!image) {
      res.status(400);
      throw new Error('Image not found');
    }

    const user = await User.findById(req.user.id)
    // check for user
    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }
    //make sure logged in user matches the image user
    if(image.user.toString() !== user.id){
        res.status(401)
        throw new Error('User not authorised')
    }
    const updatedImage =
      await Image.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );

    res.status(200).json(updatedImage);
  }
);

// @desc    delete image
// @route   DELETE /api/images/:id
// @access  Private
const deleteImage = asyncHandler(
  async (req, res) => {
    const image = await Image.findById(
      req.params.id
    );

    if (!image) {
      res.status(400);
      throw new Error('Image not found');
    }

    const user = await User.findById(req.user.id)
    // check for user
    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }
    //make sure logged in user matches the image user
    if(image.user.toString() !== user.id){
        res.status(401)
        throw new Error('User not authorised')
    }

    await image.remove();

    res.status(200).json({ id: req.params.id });
  }
);

module.exports = {
  getImages,
  uploadImage,
  updateImage,
  deleteImage,
};
