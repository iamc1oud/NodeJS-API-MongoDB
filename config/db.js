const mongoose = require('mongoose')

const mongoDB = async () => {
    const conn = await mongoose.connect('mongodb://localhost:27017', { useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false , useNewUrlParser:true})
    console.log(`Connected ${conn.connection.host}`.cyan.underline.bold) 
}

module.exports = mongoDB