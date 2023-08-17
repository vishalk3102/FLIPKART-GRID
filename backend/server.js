const app = require('./app')
let cors = require('cors')

// const cloudinary = require('cloudinary')
const connectDatabase = require('./config/database')

// Handling Uncaught Exception
process.on('uncaughtException', err => {
  console.log(`Error: ${err.message}`)
  console.log(`Shutting down the server due to Uncaught Exception`)
  process.exit(1)
})

require('dotenv').config({ path: 'backend/config/config.env' })

// Config
// if (process.env.NODE_ENV !== 'PRODUCTION') {
//   require('dotenv').config({ path: 'backend/config/config.env' })
// }

// Connecting to database
connectDatabase()

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET
// })

app.use(cors())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`)
})

// Unhandled Promise Rejection
process.on('unhandledRejection', err => {
  console.log(`Error: ${err.message}`)
  console.log(`Shutting down the server due to Unhandled Promise Rejection`)

  server.close(() => {
    process.exit(1)
  })
})
