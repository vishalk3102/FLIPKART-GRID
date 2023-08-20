const Product = require('../models/productModel')
const User = require('../models/userModel')
const ErrorHander = require('../utils/errorhander')
const catchAsyncErrors = require('../middleware/catchAsyncErrors')
const axios = require('axios')

exports.getRecommend = catchAsyncErrors(async (req, res, next) => {
  const flaskUrl = 'http://localhost:5000/recommend'
  const response = await axios.get(flaskUrl)
  const result = response.data
  console.log('hello')

  res.status(200).json({
    success: true,
    result
  })
})

exports.getRecommendedProduct = catchAsyncErrors(async (req, res, next) => {
  const productIds = req.body.ids
  const products = await Product.find({ product_id: { $in: productIds } })
  console.log('Matching products:', products)

  if (!products) {
    return next(new ErrorHander('Products not found', 404))
  }
  res.status(200).json({
    success: true,
    products
  })
})
