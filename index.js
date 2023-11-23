import express from 'express'
import mongoose from "mongoose";
import cors from 'cors';
import http from 'http'
import dotenv from 'dotenv'
import router from './routes/index.js';
//Initialization
dotenv.config();
const {MONGO_PROD,PORT}=process.env;
const app=express()
app.use(express.json())
app.use(cors('*'))

app.use('/',router)


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