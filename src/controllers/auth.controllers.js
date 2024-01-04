import mongoose from 'mongoose'
import User from '../models/user.model.js'
import jsonwebtoken from 'jsonwebtoken'

// --> Function the insert user

export const formData = async (req, res) => {
    try {

        const { username, email, password } = req.body  //-> 
        console.log(req.body)
        const newUser = new User({
            username,
            email,
            password
        })
        const savedUser = await newUser.save()

        res.status(201).json({ savedUser });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}
//->  function the show patients
export const getUser = async (req, res) => {
    try {
        const user = await User.find()
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
//-> 
export const getUserById = async (req, res) => {

    try {
        console.log(mongoose.Types.ObjectId.isValid(req.params.userId))
        const user = await User.findById(req.params.userId)
        if (!user) return res.status(404).json({ message: "user not register" })
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
//-> update data
export const updateUser = async (req, res) => {
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.userId, {
            ...req.body
        }, {
            new: true
        })
        res.status(200).json(updateUser)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//->  Eliminate user
export const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.userId)
        return res.status(204).json({ message: "user eliminated" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
//  -> function for access the password and email
export const signIn = async (req, res) => {
    try {
        const { username, password } = req.body
        //verify if the user exist
        const existingUser = await User.findOne({ username })

        if (!existingUser) return res.status(404).json({ message: "user not found" })
        // verify if the password
        const passwordValid = await User.findOne({ password })
        if (!passwordValid) return res.status(404).json({ message: "password incorrect" })
        // -> if the user existing
        //-> in payload use the _id 
        const token = jsonwebtoken.sign({ userId: existingUser._id }, 'Hola', { expiresIn: '1h' })

        // -> 
       const decoded = jsonwebtoken.decode(token, 'Hola')

        res.status(200).json({ message: "User existing", token: token, decoded: decoded.userId, User: existingUser })

        console.log(decoded, 'token', token)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}




