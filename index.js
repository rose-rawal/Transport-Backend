import express from 'express'
import mongoose from "mongoose";
import cors from 'cors';
import http from 'http'
import dotenv from 'dotenv'
import router from './routes/index.js';
import carRouter from './routes/carroute.js';
import axios from 'axios';
//Initialization
dotenv.config();
const {MONGO_PROD,PORT,KHALTI_SECRET_KEY}=process.env;
const app=express()
app.use(express.json())
app.use(cors('*'))
app.get('/',(req,res)=>{
    return res.json("Hello world")
})
app.use('/',router)
app.use('/car',carRouter)
app.post('/khalti-api',async(req,res)=>{
    const payload=req.body;
    // console.log(payload)
    // return res.json(payload)
    const response=await axios.post('https://a.khalti.com/api/v2/epayment/initiate/',payload,{
       headers:{ Authorization: `KEY ${KHALTI_SECRET_KEY}`}
    })
    if(response){
        res.json({
            success:true,
            data:response?.data
        })
    }else{
        res.json({
            success:false,
            message:'Something Went Wrong'
        })
    }
})
//Connect DataBase
mongoose.connect(MONGO_PROD)
.then(()=>{
    console.log('connected database')
})
.catch((err)=>{
    console.log(err)
})



//Connect Server
app.listen(PORT,()=>{
    console.log(`Listening at ${PORT}`)
})