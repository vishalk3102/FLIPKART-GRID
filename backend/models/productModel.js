const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  product_id: {
    type: String,
    required: true
  },
  product_title: {
    type: String,
    required: [true, 'Please Enter product Name'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Please Enter product Description']
  },
  price: {
    type: Number,
    required: [true, 'Please Enter product Price'],
    maxLength: [8, 'Price cannot exceed 8 characters']
  },
  rating: {
    type: Number,
    default: 0
  },
  index: {
    type: Number
  },
  product_category: {
    type: String,
    required: [true, 'Please Enter Product Category']
  },
  tags: [
    {
      type: String
    }
  ],
  numOfReviews: {
    type: Number,
    default: 0
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
      },
      name: {
        type: String,
        required: true
      },
      rating: {
        type: Number,
        required: true
      },
      comment: {
        type: String,
        required: true
      }
    }
  ],

  // user: {
  //   type: mongoose.Schema.ObjectId,
  //   ref: 'User',
  //   required: true
  // },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Product', productSchema)
