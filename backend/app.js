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

// Route Imports
const product = require('./routes/productRoute')
const user = require('./routes/userRoute')

app.use('/api/v1', product)
app.use('/api/v1', user)

// Middleware for Errors
app.use(errorMiddleware)

module.exports = app
