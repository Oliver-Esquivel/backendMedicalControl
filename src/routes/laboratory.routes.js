import { Router } from "express";
import { addLaboratory, dropLaboratory, getLaboratoryById } from "../controllers/authlaboratory.controller.js";
import { authenticated } from "../middlewares/examenMedico.middleware.js";
const laboratory = Router()

laboratory.get('/:laboratoryId', getLaboratoryById)
laboratory.post('/',[authenticated], addLaboratory)
laboratory.delete('/laboratoryId',[authenticated], dropLaboratory)

export default laboratory