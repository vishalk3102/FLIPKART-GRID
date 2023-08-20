const ErrorHander = require('../utils/errorhander')
const catchAsyncErrors = require('../middleware/catchAsyncErrors')
const User = require('../models/userModel')
const sendToken = require('../utils/jwtToken')
const crypto = require('crypto')
const ObjectId = require('mongodb').ObjectId

// Register a User
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body

  const user = await User.create({
    name,
    email,
    password
  })

  sendToken(user, 201, res)
})

// Login User
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body

  // checking if user has given password and email both

  if (!email || !password) {
    return next(new ErrorHander('Please Enter Email & Password', 400))
  }

  const user = await User.findOne({ email }).select('+password')

  if (!user) {
    return next(new ErrorHander('Invalid email or password', 401))
  }

  const isPasswordMatched = await user.comparePassword(password)

  if (!isPasswordMatched) {
    return next(new ErrorHander('Invalid email or password', 401))
  }

  sendToken(user, 200, res)
})

// Logout User
exports.logout = catchAsyncErrors(async (req, res, next) => {
  res.cookie('token', null, {
    expires: new Date(Date.now()),
    httpOnly: true
  })

  res.status(200).json({
    success: true,
    message: 'Logged Out'
  })
})

// Get User Detail
exports.getUserDetails = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user.id)

  res.status(200).json({
    success: true,
    user
  })
})

// Get all users(admin)
exports.getAllUser = catchAsyncErrors(async (req, res, next) => {
  const users = await User.find()

  res.status(200).json({
    success: true,
    users
  })
})

// Get single user (admin)
exports.getSingleUser = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.params.id)

  if (!user) {
    return next(
      new ErrorHander(`User does not exist with Id: ${req.params.id}`)
    )
  }

  res.status(200).json({
    success: true,
    user
  })
})

// Delete User --Admin
exports.deleteUser = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.params.id)

  if (!user) {
    return next(
      new ErrorHander(`User does not exist with Id: ${req.params.id}`, 400)
    )
  }

  const imageId = user.avatar.public_id

  await cloudinary.v2.uploader.destroy(imageId)

  await user.remove()

  res.status(200).json({
    success: true,
    message: 'User Deleted Successfully'
  })
})
exports.updateInteractions = catchAsyncErrors(async (req, res, next) => {
  // let productId = req.body.productId
  // let userId = req.body.userId
  // let userId = req.params.id
  // let interaction = {
  //   productId: req.body.productId
  // }
  // console.log(req.body.userId)
  // console.log(userId)
  // console.log(req.body.productId)
  // console.log(req.params.id)
  // console.log(req.body.productId)

  // const user = await User.findById(req.params.id)

  /*  user.interactions.push({
    productId
  }) */

  // console.log(user)

  // let query = { _id: req.params.userId }
  // let update = { $push: { interactions: { productId: 'AJKSHDLSL' } } }
  // const user = await User.findByIdAndUpdate(req.params.id, update, {
  //   new: true,
  //   runValidators: true,
  //   useFindAndModify: false
  // })

  // const updatedUser = await User.findByIdAndUpdate(
  //   { _id: req.params.id },
  //   { $push: { interactions: { productId } } },
  //   { new: true }
  // )

  // let userId = req.params.id
  let userId = `64dfa9f3e23a61884ac99b96`
  let product = `AJKSHDLSL`
  let update = { $push: { interactions: { product_id: product } } }
  const user = await User.findByIdAndUpdate(userId, update)

  // await User.findOneAndUpdate(userId, update)
  // const user = await User.findById({ _id: userId })
  // console.log(updatedUser)

  // await user.save()
  res.status(200).json({
    success: true,
    // updatedUser,
    // user,
    message: 'Interaction updated Successfully'
  })
})
