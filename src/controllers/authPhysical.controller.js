import mongoose from "mongoose";
import Physical from '../models/Physical.model.js'
// --> Insert the register explore physical
export const addPhysical = async (req , res) =>{
   try {
    const {
        peso, weight, size, temp, pulse,ideal_weight,
        bodily_integrity,march,abnormal_movements, specify_body,
        specify_abnormalities, ears, ear_canal, tympanum, audition,
        nose, septum, crinnes, mucosa, secretions, mouth, mucous,
        gums, teeth, tongue, pharynx, tonsils, eyes, eyelids, annexes,
        conjunctiva, scleratic, previous_camera, fundus, pupils,
        eye_reflexes, visual_acuity, right_eye, left_eye, od_with_correction,
        oi_with_correction, dentist, lack, clogged, malformation, 
        mmmppciiiicppmmm_top, mmmppciiiicppmmm_bottom, skin, pulse_carotid,
        ganglia, cervical, thyroid, exploration_note, thoracic,exploration_note_,
        thoracic_, skin_, breasts_and_nipples, breathing_movements, lung_fields,
        heart_rate, noise_intensity, features_heartbeat, exploration_note_T,
        abdomen, skin_abd, form, pain, consistency, visceromegaly, peristalsis,
        exploration_note_abd
    } = req.body
    console.log(req.body)
    const addPhysical = new Physical ({
        peso, weight, size, temp, pulse,ideal_weight,
        bodily_integrity,march,abnormal_movements, specify_body,
        specify_abnormalities, ears, ear_canal, tympanum, audition,
        nose, septum, crinnes, mucosa, secretions, mouth, mucous,
        gums, teeth, tongue, pharynx, tonsils, eyes, eyelids, annexes,
        conjunctiva, scleratic, previous_camera, fundus, pupils,
        eye_reflexes, visual_acuity, right_eye, left_eye, od_with_correction,
        oi_with_correction, dentist, lack, clogged, malformation, 
        mmmppciiiicppmmm_top, mmmppciiiicppmmm_bottom, skin, pulse_carotid,
        ganglia, cervical, thyroid, exploration_note, thoracic,exploration_note_,
        thoracic_, skin_, breasts_and_nipples, breathing_movements, lung_fields,
        heart_rate, noise_intensity, features_heartbeat, exploration_note_T,
        abdomen, skin_abd, form, pain, consistency, visceromegaly, peristalsis,
        exploration_note_abd
    })
    const savedPhysical = await addPhysical.save()
    res.status(201).json({savedPhysical})
   } catch (error) {
    res.status(500).json({message: error.message})
   }
}

//--> Search for id 
export const getPhysicalById = async (req, res) =>{
    try {
        console.log(mongoose.Types.ObjectId.isValid(req.params.physicalId))
        const getPhysical = await Physical.findById(req.params.physicalId)
        if(!getPhysical) return res.status(404).json({message: "id not found"})
            res.status(201).json({getPhysical})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

//  --> Delete explore physical
export const dropPhysical = async (req , res) => {
    try {
        await Physical.findByIdAndDelete(req.params.physicalId)
        return res.status(204).json({message: "Explore physical is eliminate"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}