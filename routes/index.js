const {
  Router
} = require('express')
const router = Router()

// router.use(require('./carts.route'))
// router.use(require('./products.route'))
// router.use(require('./categories.route'))
// router.use(require('./brands.route'))
router.use(require('./reviews.route'))

module.exports = router