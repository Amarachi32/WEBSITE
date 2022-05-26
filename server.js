
const dotenv = require('dotenv')
dotenv.config({path:'./config.env'})
// const express = require('express')
const app = require('./index.js')

const mongoose = require('mongoose')
 
const DB = process.env.DATABASE.replace(
    'PASSWORD',
    process.env.DATABASE_PASSWORD
);
mongoose
.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true
}).then(()=>{
    console.log('DB CONNECTION SUCESSFUL')
})

const elenmentschema = new mongoose.Schema({
    name:{
        type: 'string',
        required: [true, 'an element must have` a name'],
        unique: true
    },
    rating:{
        type: Number,
        default:3.2,
    },
    price:{
        type: 'number',
        required:[true, 'an element must have a price']
    }
})

const port = process.env.PORT || 3000
app.listen(port, ()=>{ 
    console.log('server is on')
}) 