const Review = require('../models/Review.model')

module.exports.reviewController = {
    postReview: async (req, res) => {
        try {
            const review = await Review.create({
                text: req.body.text,
                productReview: req.body.productReview
            })
            res.json(review)
        } catch (error) {
            res.json('Ошибка при создании отзыва')
        }
    },
    patchReview: async (req, res) => {
        try {
            const patchReview = await Review.findByIdAndUpdate(req.params.id, {
                text: req.body.text,
                productReview: req.body.productReview
            })
            res.json('Отзыв удален')
        } catch (error) {
            res.json('Ошибка при изменении отзыва')
        }
    },
    deleteReview: async (req, res) => {
        try {
            const deleteReview = await Review.findByIdAndRemove(req.params.id)
            res.json(deleteReview)
        } catch (error) {
            res.json('Ошибка при удалении отзыва')
        }
    },
    getReviewById: async (req, res) => {
        try {
            const getReview = await Review.findById(req.params.id)
            res.json(getReview)
        } catch (error) {
            res.json('Ошибка при выводе отзыва')
        }
    },
    getReview: async (req, res) => {
        try {
            const getReview = await Review.find()
            res.json(getReview)
        } catch (error) {
            res.json('Ошибка при выводе отзывов')
        }
    }
}