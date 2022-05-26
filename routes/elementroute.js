const express = require('express')
const router = express.Router()
const elementcontrol = require('./../controllers/elementcontrollers')
// const {getallelements,postelements,getoneelements,patchelements,deleteelements} = require('./controllers/elementcontroller')

// router.param('id', (req,res,next,val)=>{
//     console.log(`the value is: ${val}`)
    
//     next()
// })

router.param('id', elementcontrol.checkid)
//routing
router.route('/')
        .get(elementcontrol.getallelements)
        .post(elementcontrol.checkbody,elementcontrol.postelements)
router.route('/:id').get(elementcontrol.getoneelements).patch(elementcontrol.patchelements).delete(elementcontrol.deleteelements)

module.exports = router