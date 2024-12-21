import express from 'express'
import db from '../db.js'


const router=express.Router();

//get all to do for logged in user
router.get('/',(req,res)=>{

})

//create to do
router.post('/',(req,res)=>{})


//update to do
router.put('/:id',(req,res)=>{})

//delete to do

router.delete('/:id',(req,res)=>{

})

export default router