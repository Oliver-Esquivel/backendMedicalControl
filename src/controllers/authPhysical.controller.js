import Physical from '../models/Physical.model.js'

export const getPhysical = async (req, res) => {
    try {
        const getPhysical = await Physical.find()
        res.json(getPhysical)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// --> Insert the register explore physical
export const createPhysical = async (req , res) =>{
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
    const newPhysical = new Physical ({
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
        exploration_note_abd, user : req.user.id
    })
    const savedPhysical = await newPhysical.save()

    res.status(201).json({ message: "examen Fisico",  savedPhysical})
   } catch (error) {
    res.status(500).json({message: error.message})
   }
}

//  --> Delete explore physical
export const deletePhysical = async (req , res) => {
    try {
        await Physical.findByIdAndDelete(req.params.physicalId)
        return res.status(204).json({message: "Explore physical is eliminate"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}