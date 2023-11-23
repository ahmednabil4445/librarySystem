const mongoose = require('mongoose')

const usedBookSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true

    },
    description: {
        type: String,
        required: true
    },

    image: String,
}, { timestamps: true })



module.exports = mongoose.model('usedBook', usedBookSchema)