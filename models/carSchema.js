import mongoose from "mongoose";
const carSchema=mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Price:{
        type:Number,
        required:true
    },
    Description:{
        type:String,
        required:true
    },
    Image:{
        type:String
    }
})
export default mongoose.model('cars',carSchema)