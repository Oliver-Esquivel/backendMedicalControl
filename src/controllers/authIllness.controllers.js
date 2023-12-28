import mongoose from "mongoose";
import illness from '../models/formIllness.model.js'

// --> SAVE ILLNESS DATA
export const addIllness = async(req, res) => {
    try {
        const {
            ALLERGIC, DIABETIC, EPILEPTIC
        } = req.body
    console.log(req.body)
    const addIllness = new illness ({
        ALLERGIC, DIABETIC, EPILEPTIC
    })
    const savedIllness = await addIllness.save()
    res.status(200).json({savedIllness}) 
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}