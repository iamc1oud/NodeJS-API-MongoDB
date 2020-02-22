// Import module
const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const colors = require('colors')
const connectDB = require('./config/db')
const errorHandler = require('./middleware/error')
// Import routes
const bootcamps = require('./routes/bootcamp')

// Load environment variables
dotenv.config({path:"./config/config.env"})

// connect to databse
connectDB()

// Initialize the express app
const app = express()

// Middlewares
app.use(morgan('dev'))
app.use(express.json())

// Mount routers (Middleware)
app.use('/api/v1/bootcamps', bootcamps)

app.use(errorHandler)

app.listen(process.env.PORT, () => console.log("Server started".yellow.bold))