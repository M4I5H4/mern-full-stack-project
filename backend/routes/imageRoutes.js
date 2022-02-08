const express = require('express')
const router = express.Router()
const {getImages, uploadImage, updateImage, deleteImage} = require('../controllers/imageController')

router.route('/').get(getImages).post(uploadImage)
router.route('/:id').delete(deleteImage).put(updateImage)


module.exports = router