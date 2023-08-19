const express = require('express')
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth')
const { getRecommend } = require('../controllers/recommendController')

const router = express.Router()

router.route('/recommend').get(getRecommend)
