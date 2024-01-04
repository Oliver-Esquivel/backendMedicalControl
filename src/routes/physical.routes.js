import { Router}  from "express";
import { addPhysical, dropPhysical, getPhysicalById } from "../controllers/authPhysical.controller.js";

const physical = Router()

physical.get('/:physicalId', getPhysicalById)
physical.post('/', addPhysical)
physical.delete('/:physicalId', dropPhysical)

export default  physical