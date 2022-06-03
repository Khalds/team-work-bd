const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  user: {
    ref: "User",
    type: mongoose.SchemaTypes.ObjectId,
    default: null,
  },
  products: [{
    ref: "Product",
    type: mongoose.SchemaTypes.ObjectId,
  }, ]
});

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;