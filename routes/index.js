import { Router } from "express";
const router=Router()
import userSchema from "../models/userSchema.js";

async function setUser(req,res){
    const {Name,Password,Email,Age}=req.body
    const added= await userSchema.create({
        ...req.body
    })
    return res.json(added)
}
router.post('/setUser',setUser)

async function allUser(req,res){
    const users=await userSchema.find()
    return res.json(users);
}
router.get('/allUser',allUser)

async function findUser(req,res){
    const {Name,Password}=req.body
    const user=await userSchema.find({
        Name,Password
    })
    return res.json(user)
}
router.post('/findUser',findUser)

async function updateUser(req,res){
    const {Name,Password,Email}=req.body
   
   
    const change=await userSchema.findOneAndUpdate({
        _id:req.params.id
    },{Name},{new:true})
    if(!change){
        res.status(400).json({error:'user Not found'})
    }
    return res.json(change)   //remaining 
}
router.put('/updateUser/:id',updateUser)

async function DeleteUser(req,res){
    const _id=req.params.id
    const userDelete=await userSchema.findOneAndDelete({_id})
    return res.json(userDelete)
}
router.delete('/deleteUser/:id',DeleteUser)
export default router