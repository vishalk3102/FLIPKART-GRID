const express = require('express')
const {
  getRecommend,
  getRecommendedProduct
} = require('../controllers/recommendController')

const router = express.Router()
// router.route('/recommend').post(getRecommend)
// router.route('/recommend/products').post(getRecommendedProduct)
router.route('/product/:id').post(getRecommend)
router.route('/product/:id').post(getRecommendedProduct)

module.exports = router
