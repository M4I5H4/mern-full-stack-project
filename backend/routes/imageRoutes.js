const express = require('express')
const router = express.Router()
const {getImages, uploadImage, updateImage, deleteImage} = require('../controllers/imageController')

const {protect} = require('../middleware/authMiddleware')
router.route('/').get(protect, getImages).post(protect, uploadImage)
router.route('/:id').delete(protect, deleteImage).put(protect, updateImage)


module.exports = router