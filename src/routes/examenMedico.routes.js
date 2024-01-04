
import { dataClinic, deleteConsult, getDataClinicById } from "../controllers/authForm.controllers.js";
import { Router } from "express";
import { authenticated, validateDataPatient } from "../middlewares/examenMedico.middleware.js";

const examen = Router()
examen.get('/:userId', getDataClinicById)
examen.post('/',[authenticated, validateDataPatient],dataClinic)
examen.delete('/:userId', deleteConsult)

export default examen