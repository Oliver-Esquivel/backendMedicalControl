import { Router } from "express";
import { getIllness ,createIllness , deleteIllness} from "../controllers/authIllness.controllers.js";
import { authRequire } from "../middlewares/validateToken.js";
const illness = Router();

illness.get('/', [authRequire], getIllness)

illness.post('/' , [authRequire], createIllness)

illness.delete('/:illnessId',[authRequire] , deleteIllness)

export default illness