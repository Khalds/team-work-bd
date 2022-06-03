const mongoose = require('mongoose')
const reviewSchema = mongoose.Schema({
    text: String,
    productReview: {
        ref: 'Product',
        type: mongoose.SchemaTypes.ObjectId
    }
})

const Review = mongoose.model('Review', reviewSchema)
module.exports = Review 