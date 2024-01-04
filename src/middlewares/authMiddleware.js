import mongoose from 'mongoose'
import User from '../models/user.model.js'
import Jwt from 'jsonwebtoken'
// Function that enters complete data 
export const validateDataUser = async (req, res, next) => {
    try {
        const { username, email, password } = req.body
        //--> verify if to provide data necessary
        if (!username || !email || !password) return res.status(400).json({ message: "Data obligatory" })

        //---> verify if name the user exist
        const nameUser = await User.findOne({ username })
        if (nameUser) return res.status(400).json({ message: "Username exist" })

        //--> verify if the email exist
        const emailExist = await User.findOne({ email })
        if (emailExist) return res.status(400).json({ message: "Email exist   " })

        // --> if all the process its very ok the come in next function
        next()
    }
    catch (error) {
        res.status(500).json({ message: error })
    }
}

//function to validate the token when entering the site 
export const validateToken = async (req, res, next) => {
    try {
        //  -->get the token from the header
        const token = req.header('Authorization')
        // -->we check if the token exists
        if (!token) {
            return res.status(401).json({ message: "Access not authorization" })
        }
        // --> verify and decode token
        const decode = Jwt.verify(token, 'Hola');

        console.log(decode)
            //---> 
        if(!mongoose.Types.ObjectId.isValid(decode)) return res.status(422).json({message: "ID NO VALID !!!!!!!!1"})
        
        const foundUser = await User.findById(decode)

        if (!foundUser) return res.status(404).json({ message: "User not found" })

        console.log(foundUser)
        // --> We store the token information
        req.user = decode.user;
        

        next()

    } catch (error) {
        console.error(error)
        return res.status(401).json({ message: 'Unauthorized access invalid token' })
    }
}

