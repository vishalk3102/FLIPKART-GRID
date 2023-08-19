const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const cors = require('cors')
// const path = require('path')

const errorMiddleware = require('./middleware/error')

// Config
require('dotenv').config({ path: 'backend/config/config.env' })

// if (process.env.NODE_ENV !== 'PRODUCTION') {
//   require('dotenv').config({ path: 'backend/config/config.env' })
// }

app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(fileUpload())
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
  })
)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

// Route Imports
const product = require('./routes/productRoute')
const user = require('./routes/userRoute')
// const recommend = require('./routes/recommendRoute')
const recommend = require('./routes/recommendRoute')

app.use('/api/v1', product)
app.use('/api/v1', user)
app.use('/api/v1', recommend)

// Middleware for Errors
app.use(errorMiddleware)

module.exports = app
