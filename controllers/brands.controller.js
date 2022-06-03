// Работает

const Brand = require('../models/Brand.model');

module.exports.brandController = {
  postBrand: async (req, res) => {
    try {
      const postBrand = await Brand.create({
        name: req.body.name,
        description: req.body.description,
      })
      res.json(postBrand)
    } catch (error) {
      res.json(error)
    }
  },
  deleteBrand: async (req, res) => {
    try {
      const deleteBrand = await Brand.findByIdAndRemove(req.params.id)
      res.json(deleteBrand)
    } catch (error) {
      res.json(error)
    }
  },
  patchBrand: async (req, res) => {
    try {
      const patchBrand = await Brand.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        description: req.body.description,
      })
      res.json(patchBrand)
    } catch (error) {
      res.json(error)
    }
  },
  getBrand: async (req, res) => {
    try {
      const getBrand = await Brand.find();
      res.json(getBrand);
    } catch (error) {
      res.json(error)
    }
  },
  getBrandById: async (req, res) => {
    try {
      const getBrandById = await Brand.findById(req.params.id);
      res.json(getBrandById);
    } catch (error) {
      res.json(error)
    }
  }
}