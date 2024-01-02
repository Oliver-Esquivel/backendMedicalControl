//estructura fija
import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcryptjs' //-> 

const userSchema = new Schema({
    username :{
        type : String,
        //require : true, // require data complete
        trim: true,     // eliminate the spaces
    },
    email : {
        type : String,
        trim : true,
      //  unique : true, // valor unique 
    },
    password : {
        type : String,
        //require: true,
    }
})
//  -> ciframos la contraseña con 8 saltos
userSchema.static.encryptPassword = async (password)=>{
    const salt = await bcrypt.genSalt(8)
    return await bcrypt.hash(password, salt)
}
//  --> pasamos a un estado inicial la encryptacion del hash
userSchema.statics.comparePassword = async (password, receivedPassword) =>{
    return await bcrypt.compare(password, receivedPassword)
}

export default mongoose.model('user', userSchema) // create the collection and the save data