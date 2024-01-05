import mongoose from "mongoose";
import laboratory from '../models/laboratorioGenitales.model.js'

export const getLaboratory = async (req, res) => {
    try {
        const getLaboratory = await laboratory.find()
        res.json(getLaboratory)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// -->Insert data Examen Laboratory 
export const createLaboratory = async (req, res) => {
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

        const newLaboratoryInstance = new laboratory({
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
            xii_diagnosis, xiii_treatment, xiv_comments,
            user: req.user.id
        });

        const saveLab = await newLaboratoryInstance.save();

        res.status(201).json({ message: "examen de laboratorio",  saveLab });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// --> consult information for id

// eliminate register the laboratory
export const deleteLaboratory= async (req, res) => {
    try {
        await laboratory.findByIdAndDelete(req.params.laboratoryId)
        return  res.status(204).json({message: "Exam the laboratory eliminated"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

