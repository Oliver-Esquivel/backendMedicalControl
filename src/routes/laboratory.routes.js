import { Router } from "express";
import { getLaboratory ,createLaboratory, deleteLaboratory } from "../controllers/authlaboratory.controller.js";
import { authRequire } from "../middlewares/validateToken.js";
const laboratory = Router()

laboratory.get('/' , [authRequire] , getLaboratory)

laboratory.post('/', [authRequire] , createLaboratory)

laboratory.delete('/:laboratoryId' , [authRequire], deleteLaboratory)
export default laboratory