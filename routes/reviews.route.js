const { Review, Router } = require('express')
const { reviewController } = require('../controllers/reviews.controller')

const router = Router();

router.post('/admin/review', reviewController.postReview)
router.patch('/admin/review/:id', reviewController.patchReview)
router.delete('/admin/review/:id', reviewController.deleteReview)
router.get('/review', reviewController.getReview)
router.get('/review/:id', reviewController.getReviewById)

module.exports = router