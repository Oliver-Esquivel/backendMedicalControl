import User from '../models/user.model.js'

export const validateDataUser = async (req, res, next) =>{
    try{
        const { username, email, password} = req.body
        //--> verify if to provide data necessary
        if(!username || !email || !password) return  res.status(400).json({message : "Data obligatory"})

        //---> verify if name the user exist
        const nameUser = await User.findOne({username})
        if(nameUser) return res.status(400).json({message: "Username exist"})

        //--> verify if the email exist
        const emailExist = await User.findOne({email})
        if(emailExist) return res.status(400).json({message: "Email exist   "})

        // --> if all the process its very ok the come in next function
        
        next()
    }
    catch (error){
        res.status(500).json({message: error})
    }
}