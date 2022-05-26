// const { json } = require('express')
const express = require('express')
const morgan = require('morgan')
// const fs = require('fs')
const app = express()
const elementroute = require('./routes/elementroute')
const userroute = require('./routes/userroute')




//MIDDLEWARE
console.log(process.env.NODE_ENV)
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}
app.use(express.static('public'))
app.use(express.json());

app.use((req,res, next) => {
    console.log('hello from middleware');
    next()
})
app.use((req,res, next) => {
    requestedTime = new Date().toISOString();
    next()
})

//ROUTE HANDLER

//morgan

//ROUTE
//MOUNTING ROUTE


app.use('/api/v1/tours', elementroute)
app.use('/api/v1/users', userroute)


//mounting morgan


// app.get('/api/v1/tours', getallelements)
// app.get('/api/v1/tours/:id', getoneelements)
// app.post('/api/v1/tours', postelements)
// app.patch('/api/v1/tours/:id', patchelements)
// app.delete('/api/v1/tours/:id', deleteelements)

//SERVER
app.listen(3000, ()=>{ 
    console.log('server is on')
}) 
