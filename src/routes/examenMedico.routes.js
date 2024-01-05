import { Router } from "express";
import { createExam, getExam } from "../controllers/authForm.controllers.js";
import { authRequire } from "../middlewares/validateToken.js";

const examen = Router()

examen.get('/',[authRequire],getExam)

examen.post('/', [authRequire], createExam)

export default examen