const User = require("../models/User.model");

module.exports.usersController = {
    postUser: async (req, res) => {
        try {
            const user = await User.create({
                name: req.body.name
            });
            res.json(user)
        } catch (error) {
            res.json(error.message)
        }
    },
    patchUser: async (req, res) => {
        try {
            const user = await User.findByIdAndRemove(req.params.id, {
                name: req.body.name
            });
            res.json(user)
        } catch (error) {
            res.json(error.message)
        }
    },
    deleteUser: async (req, res) => {
        try {
            await User.findByIdAndRemove(req.params.id);
            res.json("user удален")
        } catch (error) {
            res.json(error.message)
        }
    },
    getUsers: async (req, res) => {
        try {
            const user = await User.find();
            res.json(user)
        } catch (error) {
            res.json(error.message)
        }
    },
    getUserById: async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            res.json(user)
        } catch (error) {
            res.json(error.message)
        }
    },
}