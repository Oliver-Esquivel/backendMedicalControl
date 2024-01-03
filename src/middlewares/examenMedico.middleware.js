import formDataExamenModel from "../models/formDataExamen.model.js";

export const validateDataExamenMedico = async (req, res, next) => {
    try {
        const { examen_medico, admission ,name_person, age, gender,status_Marital, turn, plant, type_contract,
            department, name_supervisor, plant_ant, position_work, domicile } = req.body;

            console.log('Request body', req.body)
            // --> we validate that the fields are filled 
        if (!examen_medico || !admission  ||!name_person || !age || !gender || !status_Marital || !turn  || !plant ||
            !type_contract || !department || !name_supervisor || !plant_ant || !position_work || !domicile) {
            return res.status(400).json({ message: 'Data obligatory' });
        }
            // -> checks if the user exists
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

