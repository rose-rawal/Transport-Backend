import { Router } from "express";
import carSchema from "../models/carSchema.js";
const carRouter=Router();



async function getAllCar(req,res){
    const cars=await carSchema.find();
    return res.json(cars)
}
carRouter.get('/allCar',getAllCar)



async function findCar(req,res){
    const {Name}=req.body
    const car=await carSchema.find({Name})
    return res.json(car);
}
carRouter.post('/findCar',findCar)


async function addCar(req,res){
    const {Name,Price,Description,Image}=req.body
    const newCar=await carSchema.create({
        Name,Price,Description,Image
    })
    return res.json(newCar)
}
carRouter.post('/addcar',addCar)

export default carRouter