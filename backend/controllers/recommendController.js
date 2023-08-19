const Product = require('../models/productModel')
const User = require('../models/userModel')
const ErrorHander = require('../utils/errorhander')
const catchAsyncErrors = require('../middleware/catchAsyncErrors')
const tf = require('@tensorflow/tfjs')
const loadCheckpoint = require('../../Models/')

export const getRecommend = catchAsyncErrors(async (req, res, next) => {
  const model = await tf.node.loadCheckpoint(
    '../../Models/recommender-apparal.ckpt'
  )

  const interaction = [
    'B019MDXIXG',
    'B01ADDSL9U',
    'B01B3Q4Q0O',
    'B01DXHX81O',
    'B01FWRXN0Y'
  ]
  // const userInteractions = await User.find({ userId }).toArray()
  const userInteractions = interaction
  const recommendedProducts = interaction.map(i => {
    const prediction = model.predict(i)
    return { productId: prediction }
  })

  res.status(200).json({
    success: true,
    recommendedProducts
  })
})
