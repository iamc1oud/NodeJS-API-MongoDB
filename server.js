// Import module
const express = require('express');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config({path:"./config/config.env"});

// Initialize the express app
const app = express();

/*
*   Now we will define various routes for get, post, delete and update request on bootcamp.
*   Structure : REQUEST /api/v1/bootcamp/{}
*/
app.get('/api/v1/bootcamps', (req, res) => {
    res.status(200).json({
        success : true,
        msg : "Show all bootcamps"
    })
})

app.get('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({
        success : true,
        msg : `Getting bootcamp id ${req.params.id}`
    })
})

app.post('/api/v1/bootcamps', (req, res)=>{
    res.status(200).json({
        success : true,
        msg: "Created a new bootcamp"
    })
})

app.put('/api/v1/bootcamps/:id',(req, res)=>{
    res.status(200).json({
        success : true,
        msg: `Update bootcamp id ${req.params.id}`
    })
})

app.delete('/api/v1/bootcamps/:id', (req, res)=> {
    res.status(200).json({
        success : true,
        msg: `Deleted bootcamp id ${req.params.id}`
    })
})

app.listen(process.env.PORT, () => console.log("Server started"));