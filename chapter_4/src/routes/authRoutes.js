import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import db from '../db.js'
import prisma from '../prismaClient.js';

const router=express.Router();
//register a new user end point /auth/register
router.post('/register',async (req,res)=>{
    const {username,password}=req.body

    //encrypt tthe password
    const hashedPassword=bcrypt.hashSync(password,8);
    //save the new user and hasehd pass to db
    try{
        const user= await prisma.user.create({
            data:{
                username,
                password:hashedPassword
            }
        })//kinda like object gets returned

        //now we have user i want to add first todo for them
        const defaultTodo=`Hello :) Add your first todo!`;
        await prisma.todo.create({
            data:{
                task:defaultTodo,
                userId:user.id
            }
        })

        const token=jwt.sign({id: user.id},process.env.JWT_SECRET,{expiresIn: '24h'})//JWT_SECRET defined in .env file
        res.json({token})//checkout in chatgpt what this line does
    }catch(err){
        console.log(err.message);
        res.sendStatus(503);
    }



})

router.post('/login',async (req,res)=>{

const {username,password}=req.body

try{
    const user=await prisma.user.findUnique({
        where:{
            username:username

        }
    })
    //if we cant fine a user in database
    if(!user){
        return res.status(404).send({message: "user not found"})
    }
    const passwordIsValid=bcrypt.compareSync(password,user.password)//return boolean
    //check weather password correct
    if(!passwordIsValid){return res.status(401).send({message: "invalid password"})}
    //then we have a sucesful auththentication


    console.log(user);
    const token =jwt.sign({id: user.id},process.env.JWT_SECRET,{expiresIn: '24h'})
    res.json({token});

}catch(err){
    console.log(err.message);
    res.sendStatus(503);
}





})


export default router

