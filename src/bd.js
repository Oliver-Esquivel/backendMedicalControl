import mongoose from "mongoose";

export const connectDB = async () =>{
    try{
        await mongoose.connect('mongodb://localhost:27017/medico') // connection 
        console.log("Connect ");
    }catch(error) {
        console.log(error)
    }
}