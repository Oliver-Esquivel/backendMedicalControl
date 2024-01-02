import formDataExamenModel from "../models/formDataExamen.model.js";

export const validateDataExamenMedico = async (req, res, next) => {
    try {
        const { examen_medico, name_person, age, gender, turn, date_birth, plant, type_contract,
            department, name_supervisor, plant_ant, position_work, domicile } = req.body;

            console.log('Request body', req.body)
        if (!examen_medico || !name_person || !age || !gender || !turn || !date_birth || !plant ||
            !type_contract || !department || !name_supervisor || !plant_ant || !position_work || !domicile) {
            return res.status(400).json({ message: 'Data obligatory' });
        }

        const existingUser = await formDataExamenModel.findOne({ name_person });

        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        console.log("validation passed")
        //
        next();
    } catch (error) {
        res.status(500).json({ message: 'Error in server', error });
    }
};
