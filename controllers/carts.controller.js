const Cart = require('../models/Cart.model')

module.exports.cartController = {

  postCart: async (req, res) => {
    try {
      await Cart.create({
        user: req.params.id,
        products: req.params.id
      })
      res.json('Cart is succesfully created')
    } catch (err) {
      res.json('Issue when created cart')
    }
  },

  getCartByUserId: async (req, res) => {
    try {
      const userCart = await Cart.findById({
        user: req.params.id
      })
      res.json(userCart)
    } catch (err) {
      res.json("Issue when getting cart by user id");
    }
  },

  patchCart: async (res, req) => {
    try {
      const addProduct = await Cart.findByIdAndUpdate(req.params.id, {
        $push: {
          products: req.body.products
        }
      })
      res.json(addProduct)
    } catch (err) {
      res.json(err)
    }
  },

  deleteProductById: async (req, res) => {
    try {
      await Cart.findByIdAndUpdate(req.params.id, {
        $pull: {
          products: req.body.products
        }
      })
      res.json('Product has been removed from cart');
    } catch (err) {
      res.json(err)
    }
  }
}