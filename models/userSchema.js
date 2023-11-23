import mongoose from "mongoose";
const userSchema=mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Age:{
        type:Number,

    }
})
export default mongoose.model('user',userSchema)