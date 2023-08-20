const express = require('express')
const {
  getRecommend,
  getRecommendedProduct
} = require('../controllers/recommendController')

const router = express.Router()
// router.route('/recommend').post(getRecommend)
// router.route('/recommend/products').post(getRecommendedProduct)
// router.route('/recommend').post(getRecommend)
router.route('/recommend').post(getRecommendedProduct)

module.exports = router
