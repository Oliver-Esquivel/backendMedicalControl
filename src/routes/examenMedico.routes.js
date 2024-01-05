import { Router } from "express";
import { createExam, getExam } from "../controllers/authForm.controllers.js";
import { authRequire } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { dataExams } from "../schemas/dataExams.schema.js";

const examen = Router()

examen.get('/',[authRequire],getExam)

examen.post('/', [authRequire], validateSchema(dataExams), createExam)

export default examen