import mongoose from "mongoose";
import formServiceMedic from '../models/formDataExamen.model.js'
//import jsonWebToken from 'jsonwebtoken'

//  -->yes Function for the create medical control 
export const dataClinic =  async (req , res) =>{
    try {
        const {examen_medico,
            income,
            period,
            update_At,
            name_person,
            age,
            gender,
            edo_civil,
            turn,
            date_birth,
            plant,
            type_contract,
            department,
            name_supervisor,
            plant_ant,
            position_ant,
            position_Work,
            domicile,
            place_where_work,
            work_how_long,
            exposed_agents,
            products_produces,
            daily_hours_worked,
            days_worked,
            break_fixed,
            position_or_activity,
            accidents_work,
            inability,
            laboratory_test_RX,
            other,
            ergonomic_risk_work,
            specify,
            analysis_ergonomic,
            rom,
            inhabited_by,
            no_rooms,
            animals_at_home,
            smoking,
            no_year,
            quantity_for_days,
            alcoholism,
            no_year_alcoholism,
            frequency,
            drug_addiction,
            clean,
            feed,
            immunization,
            deport_activity,
            asthmatics,
            diabetic,
            psychiatrist,
            epileptic,
            neoplastic,
            arthritic,
            obesity,
            cardiovascular,
            hypertensive,
            congenital,
            hematologic,
            audiological,
            tuberculous,
            syphilises,
            ulcers,
            lithiasis,
            other_illness,
            turn_work
        } = req.body
        console.log(req.body)
        const newDataClinic = new formServiceMedic({
                examen_medico,
                income,
                period,
                update_At,
                name_person,
                age,
                gender,
                edo_civil,
                turn,
                date_birth,
                plant,
                type_contract,
                department,
                name_supervisor,
                plant_ant,
                position_ant,
                position_Work,
                domicile,
                place_where_work,
                work_how_long,
                exposed_agents,
                products_produces,
                daily_hours_worked,
                days_worked,
                break_fixed,
                turn,
                position_or_activity,
                accidents_work,
                inability,
                laboratory_test_RX,
                other,
                ergonomic_risk_work,
                specify,
                analysis_ergonomic,
                rom,
                inhabited_by,
                no_rooms,
                animals_at_home,
                smoking,
                no_year,
                quantity_for_days,
                no_year_alcoholism,
                alcoholism,
                frequency,
                drug_addiction,
                clean,
                feed,
                immunization,
                deport_activity,
                asthmatics,
                diabetic,
                psychiatrist,
                epileptic,
                neoplastic,
                arthritic,
                obesity,
                cardiovascular,
                hypertensive,
                congenital,
                hematologic,
                audiological,
                tuberculous,
                syphilises,
                ulcers,
                lithiasis,
                other_illness,
                turn_work
        })
        const savedClinic = await newDataClinic.save()
        res.status(201).json({savedClinic})
    } catch (error) {
        req.status(500).json({message: "Error in data"})
    }
}

// --> function the show patients
export const getConsult = async(req, res) =>{
    try {
        const consult = await formServiceMedic.find()
        res.status(200).json(consult)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
// --> yes function the show user  
export const getDataClinicById = async (req, res) => {
    try {
     console.log(mongoose.Types.ObjectId.isValid(req.params.userId))
     const consult = await formServiceMedic.findById(req.params.userId)
     if(!consult) return res.status(404).json({message: "patient not register"})
     res.status(200).json(consult)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// --> Update data consult yes function
export const updateConsult = async (req, res) => {
    try {
        const updateConsult = await formServiceMedic.findByIdAndUpdate(req.params.patientId, {
            ...req.body
        }, {
            new: true
        });
        res.status(200).json(updateConsult);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

// --> eliminate register
export const deleteConsult = async (req, res) =>{
    try {
        await formServiceMedic.findByIdAndDelete(req.params.patientId)
        return res.status(204).json({message : "Consult eliminated"})
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
}