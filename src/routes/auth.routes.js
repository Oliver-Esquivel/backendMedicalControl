import { Router } from "express";
import { deleteUser, formData, getUser, getUserById, signIn, updateUser } from "../controllers/auth.controllers.js";
import { dataClinic, deleteConsult, getConsult, getDataClinicById, updateConsult } from "../controllers/authForm.controllers.js";
import { addIllness, dropIllness, getIllnessById } from "../controllers/authIllness.controllers.js";
// import formLogin from "../controllers/auth.controllers.js";
// export the function 
const router = Router()

//create de routes for access de petitions
router.get('/' , getUser)       // --> Show data
router.get('/:userId', getUserById) // --> search user id in bd
router.post('/', formData) // --> create new register
router.post('/singIn', signIn) //-> Controller signIn
router.put('/:userId', updateUser) //  --> modify the register
router.delete('/:userId', deleteUser) // --> eliminate the user


router.get('/clinic/:patientId', getConsult);    // -->not function  
router.get('/clinic/:userId', getDataClinicById); // -->yes function 
router.post('/clinic', dataClinic);   // --> Insert data exam Medic 
router.put('/clinic/:patientId', updateConsult) //--> yes function 
router.delete('/clinic/:patientId', deleteConsult) // --> yes function eliminate consult  

//***********************ILLNESS******************************
router.get('/illness/:illnessId', getIllnessById)
router.post('/illness', addIllness)
router.delete('/illness/:illnessId', dropIllness)

//***********************************************************


export default router