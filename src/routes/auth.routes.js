import { Router } from "express";
import { deleteUser, formData, getUser, getUserById, signIn, updateUser } from "../controllers/auth.controllers.js";
import { dataClinic, deleteConsult, getConsult, getDataClinicById, updateConsult } from "../controllers/authForm.controllers.js";
import { addIllness } from "../controllers/authIllness.controllers.js";
// import formLogin from "../controllers/auth.controllers.js";
//que se ejecutaran al estar las respectivas rutas export the function 
const router = Router()

//creamos las rutas y podemos acceder a las peticiones 
router.get('/' , getUser)       // --> Show data
router.get('/:userId', getUserById) // --> search user id in bd
router.post('/', formData) // --> create new register
router.post('/singIn', signIn) //-> Controller signIn
router.put('/:userId', updateUser) //  --> modify the register
router.delete('/:userId', deleteUser) // --> eliminate the user


router.get('/clinic/:patientId', getConsult);    // -->not function  Obtener datos de la clínica
router.get('/clinic/:userId', getDataClinicById); // -->yes function  Obtener datos de un paciente por ID
router.post('/clinic', dataClinic);   // --> Insert data exam Medic funciona
router.put('/clinic/:patientId', updateConsult) //--> yes function 
router.delete('/clinic/:patientId', deleteConsult) // --> yes function eliminate consult  

//  **************************************************************

router.post('/illness', addIllness)
export default router