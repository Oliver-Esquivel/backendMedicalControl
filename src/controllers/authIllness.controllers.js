import mongoose from "mongoose";
import illness from '../models/formIllness.model.js'

// --> SAVE ILLNESS DATA
export const addIllness = async(req, res) => {
    try {
        const {
            allergic,
            diabetic,
            epileptic,
            arthritic,
            cardiovascular,
            hypertensive,
            hematologic,
            traumatic,
            psychiatrist,
            neoplastic,
            surgical,
            endocrinologist,
            genitourinary,
            neurological,
            asthmatic,
            icterico,
            congenital,
            audiological,
            transfusional,
            parasites,
            measles,
            rubella,
            otitis,
            chickenpox,
            scarletfever,
            vents,
            tuberculosis,
            parotitis,
            tonsillitis,
            bronchitis,
            other,
            menarche,
            rhythm,
            menstrualcycle,
            features,
            fum,
            home_active_sex_life,
            gestations,
            delivery,
            caesarea,
            abortion,
            fertility_control,
            other_illness,
            infections,
            prostate_disease,
            reproductive_disorders,
            testicular_pain,
            frequent_opaque_urination,
            masses_in_testicles,
            vasectomy,
            pen_infection,
            prostate_infection,
            testicular_infection,
            digestive,
            genitourinary_,
            cardiovascular_,
            respiratory,
            neurological_,
            skinyteguments,
            endocrine,
            hematologic_,
            skeletal_muscle,
            psychiatrist_
        } = req.body
    console.log(req.body)
    const addIllness = new illness ({
        allergic,
        diabetic,
        epileptic,
        arthritic,
        cardiovascular,
        hypertensive,
        hematologic,
        traumatic,
        psychiatrist,
        neoplastic,
        surgical,
        endocrinologist,
        genitourinary,
        neurological,
        asthmatic,
        icterico,
        congenital,
        audiological,
        transfusional,
        parasites,
        other,
        measles,
        rubella,
        otitis,
        chickenpox,
        scarletfever,
        vents,
        tuberculosis,
        parotitis,
        tonsillitis,
        bronchitis,
        other,
        menarche,
        rhythm,
        menstrualcycle,
        features,
        fum,
        home_active_sex_life,
        gestations,
        delivery,
        caesarea,
        abortion,
        fertility_control,
        other_illness,
        infections,
        prostate_disease,
        reproductive_disorders,
        testicular_pain,
        other,
        frequent_opaque_urination,
        masses_in_testicles,
        vasectomy,
        pen_infection,
        prostate_infection,
        testicular_infection,
        digestive,
        genitourinary_,
        cardiovascular_,
        respiratory,
        neurological_,
        skinyteguments,
        endocrine,
        hematologic_,
        skeletal_muscle,
        psychiatrist_
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
