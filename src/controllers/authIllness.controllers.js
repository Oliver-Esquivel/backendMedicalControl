import mongoose from "mongoose";
import illness from '../models/formIllness.model.js'

// --> SAVE ILLNESS DATA
export const addIllness = async(req, res) => {
    try {
        const {
            ALLERGIC, DIABETIC, EPILEPTIC, ARTHRITIC, CARDIOVASCULAR,
        HYPERTENSIVE, HEMATOLOGIC, TRAUMATIC, PSYCHIATRIST,
        NEOPLASTIC, SURGICAL, ENDOCRINOLOGIST, GENITOURINARY,NEUROLOGICAL,
        ASTHMATIC, ICTERICO, CONGENITAL, AUDIOLOGICAL,TRANSFUSIONAL
        , PARASITES, OTHER, MEASLES, RUBELLA, OTITIS,
        CHICKENPOX, SCARLETFEVER,VENTS,TUBERCULOSIS,PAROTITIS, TONSILLITIS
        } = req.body
    console.log(req.body)
    const addIllness = new illness ({
        ALLERGIC, DIABETIC, EPILEPTIC, ARTHRITIC, CARDIOVASCULAR,
        HYPERTENSIVE, HEMATOLOGIC, TRAUMATIC, PSYCHIATRIST,
        NEOPLASTIC, SURGICAL, ENDOCRINOLOGIST, GENITOURINARY,NEUROLOGICAL,
        ASTHMATIC, ICTERICO, CONGENITAL, AUDIOLOGICAL,TRANSFUSIONAL
        , PARASITES, OTHER, MEASLES, RUBELLA, OTITIS,
        CHICKENPOX, SCARLETFEVER,VENTS,TUBERCULOSIS,PAROTITIS, TONSILLITIS
    })
    const savedIllness = await addIllness.save()
    res.status(200).json({savedIllness}) 
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
// -->queen -> must of the show
export const getIllnessById = async (req, res) =>{
    try {
    
        console.log(mongoose.Types.ObjectId.isValid(req.params.illnessId))
        const getIllnessId = await illness.findById(req.params.illnessId)
        if(!getIllnessId) return res.status(404).json({message: "Id not found"})
        res.status(200).json(getIllnessId)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
// --> Function for eliminated register the illness
export const dropIllness = async (req, res) => {
    try {
        await illness.findByIdAndDelete(req.params.illnessId)
        return res.status(204).json({message: "Illness Eliminated"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
