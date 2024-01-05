import { Router}  from "express";
import { getPhysical, createPhysical, deletePhysical } from "../controllers/authPhysical.controller.js";
import { authRequire } from "../middlewares/validateToken.js";
const physical = Router()

physical.get('/', [authRequire], getPhysical)

physical.post('/', [authRequire], createPhysical)

physical.delete('/:physicalId', [authRequire], deletePhysical)

export default  physical