import mongoose from "mongoose";
import examenMedico from '../models/formDataExamen.model.js'
//import jsonWebToken from 'jsonwebtoken'

export const getExam = async (req, res) => {
    try {
        const getExam = await examenMedico.find()
        res.json(getExam)
    } catch (error) {
        res.status(500).json({message: "data collection error"})
    }
}

//  --> function to create a query in the medical_exam collection

export const createExam =  async (req , res) =>{
    try {
        const {examen_medico, income, period, update_At, name_person,
            age,gender,edo_civil,turn,date_birth,plant,type_contract,department,
            name_supervisor,plant_ant,position_ant,position_Work,domicile,
            place_where_work, work_how_long, exposed_agents, products_produces, daily_hours_worked,
            days_worked,
            break_fixed,position_or_activity,accidents_work,inability,laboratory_test_RX,
            other, ergonomic_risk_work, specify, analysis_ergonomic, rom,
            inhabited_by, no_rooms, animals_at_home, smoking, no_year, quantity_for_days,
            alcoholism,no_year_alcoholism,frequency,drug_addiction,clean,feed,
            immunization, deport_activity, asthmatics, diabetic, psychiatrist,
            epileptic, neoplastic, arthritic, obesity, cardiovascular,
            hypertensive, congenital, hematologic, audiological, tuberculous,
            syphilises, ulcers, lithiasis, other_illness, turn_work
        } = req.body
        console.log(req.body)
        const newExam = new examenMedico({
                examen_medico, income, period, update_At, name_person, age,
                gender, edo_civil, turn, date_birth, plant, type_contract, department,
                name_supervisor, plant_ant, position_ant, position_Work, domicile, place_where_work,
                work_how_long, exposed_agents, products_produces, daily_hours_worked, days_worked, break_fixed,
                turn,position_or_activity,accidents_work,inability,laboratory_test_RX,other,
                ergonomic_risk_work, specify, analysis_ergonomic, rom, inhabited_by, no_rooms, animals_at_home,
                smoking, no_year, quantity_for_days, no_year_alcoholism, alcoholism, frequency,
                drug_addiction, clean, feed, immunization, deport_activity, asthmatics,
                diabetic, psychiatrist, epileptic, neoplastic, arthritic, obesity,
                cardiovascular, hypertensive, congenital, hematologic, audiological,
                tuberculous, syphilises, ulcers, lithiasis, other_illness, turn_work,
                user : req.user.id
        })

        const savedExam = await newExam.save()
    
        res.status(201).json({message: "examen medico save" , savedExam})
    
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
