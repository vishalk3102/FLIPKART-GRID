const express = require('express')
const { getRecommend } = require('../controllers/recommendController')

const router = express.Router()
router.route('/recommend').post(getRecommend)

module.exports = router
