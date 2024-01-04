import mongoose from "mongoose";
import laboratory from '../models/laboratorioGenitales.model.js'

// -->Insert data Examen Laboratory 
export const addLaboratory = async (req, res) => {
    try {
        const {
            shape, skin_Genitals, mass, lymph_nodes, pain, structure_sup,
            skin_Sup, pulse, reflexes, sensitivity, muscular_strength,
            other_characteristics_Sup, hands, nails, structure, skin_Inf,
            pulse_inf, reflexes_inf, sensitivity_inf, muscular_strength_inf,
            other_characteristic_Inf, feet, nails_inf, exploration_note_Sup_Inf,
            appearance, sensitivity_sup, emotions, motility, motor_behavior,
            coordination, intellectual_function, reflexes_psi, attention, balance,
            judgment, others, association_of_ideas,
            orientation,
            memory, language, exploration_note_Psi,
            cbc_complete_blood_count, qs_quick_screening, blood_type_and_rh_factor,
            ego, audiometry, chest_xray, spine_xray, pharyngeal_swab, stool_test,
            xii_diagnosis, xiii_treatment, xiv_comments
        } = req.body;

        console.log(req.body);

        const addLaboratoryInstance = new laboratory({
            shape, skin_Genitals, mass, lymph_nodes, pain, structure_sup,
            skin_Sup, pulse, reflexes, sensitivity, muscular_strength,
            other_characteristics_Sup, hands, nails, structure, skin_Inf,
            pulse_inf, reflexes_inf, sensitivity_inf, muscular_strength_inf,
            other_characteristic_Inf, feet, nails_inf, exploration_note_Sup_Inf,
            appearance, sensitivity_sup, emotions, motility, motor_behavior,
            coordination, intellectual_function, reflexes_psi, attention, balance,
            judgment, others, association_of_ideas,
            orientation,
            memory, language, exploration_note_Psi,
            cbc_complete_blood_count, qs_quick_screening, blood_type_and_rh_factor,
            ego, audiometry, chest_xray, spine_xray, pharyngeal_swab, stool_test,
            xii_diagnosis, xiii_treatment, xiv_comments
        });

        const saveLab = await addLaboratoryInstance.save();

        res.status(201).json({ saveLab });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// --> consult information for id
export const getLaboratoryById = async (req, res) => {
    try {
        console.log(mongoose.Types.ObjectId.isValid(req.params.laboratoryId))
        const getLaboratoryById = await laboratory.findById(req.params.laboratoryId)
        if(!getLaboratoryById) return res.status(404).json({message: "Examen the laboratory not exist"})
        res.status(200).json({message: "Examen de laboratorio ", getLaboratoryById})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
// eliminate register the laboratory
export const dropLaboratory= async (req, res) => {
    try {
        await laboratory.findByIdAndDelete(req.params.laboratoryId)
        return  res.status(204).json({message: "Exam the laboratory eliminated"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

