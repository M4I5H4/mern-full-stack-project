const asyncHandler = require('express-async-handler')
// @desc    Get images
// @route   GET /api/images
// @access  Private 
const getImages = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get images'})
})

// @desc    upload images
// @route   POST /api/images
// @access  Private 
const uploadImage = asyncHandler(async (req, res) => {
    if(!req.body.text || !req.body.image) {
        res.status(400)
        throw new Error('Please add a image and text field' )
    }
    res.status(200).json({message: 'Upload images'})
})

// @desc    update image
// @route   PUT /api/images/:id
// @access  Private 
const updateImage = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update image ${req.params.id}`})
})

// @desc    delete image
// @route   DELETE /api/images/:id
// @access  Private 
const deleteImage = asyncHandler(async (req, res) => {
    res.status(200).json({message:  `Delete image ${req.params.id}`})
})


module.exports = {getImages, uploadImage, updateImage, deleteImage}