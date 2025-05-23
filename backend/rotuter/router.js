const express=require('express')

const cntroller=require('../controller/controller')

const route=express.Router()


route.post('/orders',cntroller.order)

module.exports=route