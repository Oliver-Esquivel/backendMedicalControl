import { Router } from "express";
import { addIllness, dropIllness, getIllnessById } from "../controllers/authIllness.controllers.js";
import { authenticated } from "../middlewares/examenMedico.middleware.js";
const illness = Router();

illness.get('/:illnessId', getIllnessById)
illness.post('/',[authenticated], addIllness)
illness.delete('/:illnessId',[authenticated], dropIllness)


export default illness