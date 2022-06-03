const Product = require('../models/Product.model')


module.exports.productController = {

  postProduct: async (req, res) => {
    try {
      const product = await Product.create({
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        brand: req.body.brands
      })
      res.json(product)
    } catch (err) {
      res.json('Issues when creating product')
    }
  },

  getAllProducts: async (req, res) => {
    try {
      const allProducts = await Product.find().populate('category brand')
      res.json(allProducts)
    } catch (err) {
      res.json('Issue when getting all product')
    }
  },

  getProductById: async (req, res) => {
    try {
      const oneProduct = await Product.findById(req.params.id).populate('category brand')
      res.json(oneProduct)
    } catch (err) {
      res.json('Issue when getting product by id');
    }
  },

  getProductByCategory: async (req, res) => {
    try {
      const productByCategory = await Product.findById({
        category: req.params.id
      }).populate('category brand')
      res.json(productByCategory)
    } catch (err) {
      res.json('Issue when getting product by category');
    }
  },

  getProductByBrand: async (req, res) => {
    try {
      const productByBrand = await Product.findById({
        brand: req.params.id
      }).populate('category brand')
      res.json(productByBrand)
    } catch (err) {
      res.json('Issue when getting product by brand');
    }
  },

  patchProduct: async (req, res) => {
    try {
      await Product.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        brand: req.body.brands
      })
      res.json('Product has been changed')
    } catch (err) {
      res.json('Issues when changing product')
    }
  },

  deleteProductById: async (req, res) => {
    try {
      await Product.findByIdAndRemove(req.params.id);
      res.json('Product removed');
    } catch (err) {
      res.json('Issues when deleting product');
    }
  }
}