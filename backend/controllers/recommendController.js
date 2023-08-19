const Product = require('../models/productModel')
const User = require('../models/userModel')
const ErrorHander = require('../utils/errorhander')
const catchAsyncErrors = require('../middleware/catchAsyncErrors')
// const tf = require('@tensorflow/tfjs')
// const loadCheckpoint = require('../../Models/')
const axios = require('axios')

// export const getRecommend = catchAsyncErrors(async (req, res, next) => {
//   const model = await tf.node.loadCheckpoint(
//     '../../Models/recommender-apparal.ckpt'
//   )

//   const interaction = [
//     'B019MDXIXG',
//     'B01ADDSL9U',
//     'B01B3Q4Q0O',
//     'B01DXHX81O',
//     'B01FWRXN0Y'
//   ]
//   // const userInteractions = await User.find({ userId }).toArray()
//   const userInteractions = interaction
//   const recommendedProducts = interaction.map(i => {
//     const prediction = model.predict(i)
//     return { productId: prediction }
//   })

//   res.status(200).json({
//     success: true,
//     recommendedProducts
//   })
// })

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

// app.get('/call-flask', async (req, res) => {
//   try {
//     const flaskUrl = 'http://localhost:5000/flask-function' // Change this URL to match your Flask server

//     // Make a GET request to the Flask route
//     const response = await axios.get(flaskUrl)
//     const result = response.data

//     res.send(`Result from Flask: ${result}`)
//   } catch (error) {
//     console.error('Error occurred:', error)
//     res.status(500).send('Internal Server Error')
//   }
// })
