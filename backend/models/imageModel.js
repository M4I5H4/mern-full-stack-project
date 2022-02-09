const mongoose = require('mongoose')

const imageSchema = mongoose.Schema({
    image:{
        type: String,
        default: "no-photo.jpg",   
    },
    text:{
        type: String,
        required: [true, 'Please add a text value']
    },
    location:{
        type: String,
    },
    colour:{
        type: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Image', imageSchema)