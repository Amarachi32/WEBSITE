const express = require("express")
const router = express.Router()
const usercontrol = require('./../controllers/usercontrollers')

router.param('id', (req,res,next,val)=>{
    console.log(`the value is: ${val}`)
    next()
})
router.route('/').get(usercontrol.getallusers).post(usercontrol.postusers)
router.route('/:id').get(usercontrol.getoneusers).patch(usercontrol.patchusers).delete(usercontrol.deleteusers)

module.exports = router
