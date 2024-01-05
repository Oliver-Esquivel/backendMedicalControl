import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import { createAccessToken } from '../libs/jwt.js'

/*
function to create a user with an authentication token
*/
export const register = async (req, res) =>{
    try {
        const {email, password, username} = req.body
        const passwordHash = await bcrypt.hash(password, 10)
        
        const newUser = new User({
            username,
            email,
            password: passwordHash
        })
        const userSaved = await newUser.save()
        const token = await createAccessToken({id: userSaved._id}) //we import our function that creates the token and does it through the id
        res.cookie("token", token)  // we send the token to the headers
       
        res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email
        })

    } catch (error) {
        res.status(500).json({message: "error  in create user"})
    }
}
//login function 

export const login = async (req, res)=>{
try {
    const {email, password} = req.body

    const userFound = await User.findOne({email})
    if(!userFound) return res.status(400).json({message: "user not found"})
 // searches if the email and password match any records
    const isMatch = bcrypt.compare(password, userFound.password)
    if(!isMatch) return res.status(400).json({message: "incorrect password"})


    const token = await createAccessToken({id: userFound._id})
//if it does so, it creates a token and sends it to the head-end.
    res.cookie("token" , token)

    res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email
    })
console.log(token)
} catch (error) {
    res.status(500).json({message: "error in create user"})
}
}

//function to close the session 
export const logout = async (req, res) => {
    try {
        res.cookie("token", "", { // sends to the header an empty token 
            expires: new Date(0) 
        })
        res.status(200).json({message: "session close"})
    } catch (error) {
        res.status(500). json({message: "algo fail"})
    }
}

// function to protect a route

export const profile = async (req, res) =>{
    try {
        const userFound = await User.findById(req.user.id)

        if(!userFound) return res.status(400).json({message: "user not found"})

        return res.json({
        id: userFound._id,
        username: userFound.username
    })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}