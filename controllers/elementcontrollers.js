const fs = require('fs')

// import {dirname} from 'path'
var path = require ('path')
 __dirname = path.resolve(path.dirname(''))
const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`))

exports.checkid = (req, res, next, val)=> {
    console.log(`the id no is: ${val}`)

    if(req.params.id*1 > tours.length){
        return res.status(404).json({
            message: 'invalid'
        })
    }
    next()
}

exports.checkbody = (req,res, next) => {
    if(!req.body.name || !req.body.price){
        return res.status(404).json({
            message: 'invalid'
        })
    }
    next()
}
exports.getallelements =  (req,res)=>{
    res.status(200)
    .json({
    name: 'who am i',
    requestedTime: requestedTime,
    results: tours.length,
    data: {tours}
 })
    console.log('has received')
}
exports.getoneelements =  (req,res)=>{
    const id = req.params.id * 1
    const result = tours.find(el=>el.id === id)
    if (!result){
        return res.status(404).json({
             statuss: 'failed'
         })
     }
    res.status(200).json({status:'success', data: {result}})

    
    console.log(req.params)

}
exports.postelements =  (req,res)=>{
    const newid = tours[tours.length-1].id + 1
    const newtour =Object.assign({id:'newid'}, req.body)
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), err =>{
        res.status(201).json({
            status: 'success',
            // results: tours.length,
            data: {tours: newtour}
        })
    })
    tours.push(newtour)
    // console.log(req.body)
    // res.send('done')
}
exports.patchelements =  (req,res)=>{
    // if(req.params.id*1 > tours.length){
    //     return res.status(404).json({
    //         message: 'invalid'
    //     })
    // }
    res.status(200).json({
        message:'successful', 
        data :{tour: '<updated....>'}
    })
}
exports.deleteelements =  (req,res)=>{
   
    res.status(204).json({
        message:'successful', 
        data : null
    })
}