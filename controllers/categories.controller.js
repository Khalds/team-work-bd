const Category = require("../models/Category.model");

module.exports.categoriesController = {
    postCategory: async (req, res) => {
        try {
            const category = await Category.create({
                name: req.body.name,
                description: req.body.description
            });
            res.json(category)
        } catch (error) {
            res.json(error.message)
        }
    },
    patchCategory: async (req, res) => {
        try {
            const category = await Category.findByIdAndUpdate(req.params.id, {
                name: req.body.name,
                description: req.body.description
            });
            res.json(category)
        } catch (error) {
            res.json(error.message)
        }
    },
    deletecategory: async (req, res) => {
        try {
            const category = await Category.findByIdAndRemove(req.params.id);
            res.json("категория удалена")
        } catch (error) {
            res.json(error.message)
        }
    },
    getCategories: async (req, res) => {
        try {
            const category = await Category.find();
            res.json(category)
        } catch (error) {
            res.json(error.message)
        }
    },
    getCategoriesById: async (req, res) => {
        try {
            const category = await Category.find();
            res.json(category)
        } catch (error) {
            res.json(error.message)
        }
    },
}