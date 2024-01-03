import { Router } from "express";
import { deleteUser, formData, getUser, getUserById, signIn, updateUser } from "../controllers/auth.controllers.js";
import { dataClinic, deleteConsult, getConsult, getDataClinicById, updateConsult } from "../controllers/authForm.controllers.js";
import { addIllness, dropIllness, getIllnessById } from "../controllers/authIllness.controllers.js";
import { addPhysical, dropPhysical, getPhysicalById } from "../controllers/authPhysical.controller.js";
import { addLaboratory, dropLaboratory, getLaboratory, getLaboratoryById } from "../controllers/authlaboratory.controller.js";
import { validateDataUser, validateToken} from "../middlewares/authMiddleware.js";


const router = Router()

//create de routes for access de petitions
router.get('/', getUser)
router.get('/:userId', getUserById) // --> search user id in bd
router.post('/',validateDataUser ,formData) // --> create new register
router.post('/singIn', validateToken, signIn) //-> Controller signIn   ///validate token
router.put('/:userId', updateUser) //  --> modify the register
router.delete('/:userId', deleteUser) // --> eliminate the user

//**************************ExamenMedico***************************

router.get('/clinic/:patientId', getConsult);    // -->not function  
router.get('/clinic/:userId', getDataClinicById); // -->yes function 
router.post('/clinic', dataClinic);   // --> Insert data exam Medic 
router.put('/clinic/:patientId', updateConsult) //--> yes function 
router.delete('/clinic/:patientId', deleteConsult) // --> yes function eliminate consult  

//***********************ILLNESS******************************
router.get('/illness/:illnessId', getIllnessById)
router.post('/illness', addIllness)
router.delete('/illness/:illnessId', dropIllness)

//**********************PHYSICAL*************************************
router.get('/physical/:physicalId', getPhysicalById)
router.post('/physical', addPhysical)
router.delete('/physical/:physicalId', dropPhysical)

//***********************Examen Laboratory********************************/
router.get('/laboratory/', getLaboratory)
router.get('/laboratory/:laboratoryId', getLaboratoryById)
router.post('/laboratory', addLaboratory)
router.delete('/laboratory/:laboratoryId', dropLaboratory)

export default router