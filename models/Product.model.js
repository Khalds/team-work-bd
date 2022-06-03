const mongoose = require('mongoose')
const productSchema = mongoose.Schema({
  name: String,
  price: Number,
  category: {
    ref: 'Category',
    type: mongoose.SchemaTypes.ObjectId
  },
  brand: {
    ref: 'Brand',
    type: mongoose.SchemaTypes.ObjectId
  },
  review: {
    ref: 'Review',
    type: mongoose.SchemaTypes.ObjectId
  }
})

const Product = mongoose.model("Product", productSchema)
module.exports = Product