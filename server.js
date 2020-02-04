// Import module
const express = require('express')
const dotenv = require('dotenv')

// Import routes
const bootcamps = require('./routes/bootcamp')


// Load environment variables
dotenv.config({path:"./config/config.env"})

// Initialize the express app
const app = express()

// Mount routers (Middleware)
app.use('/api/v1/bootcamps', bootcamps)


app.listen(process.env.PORT, () => console.log("Server started"))