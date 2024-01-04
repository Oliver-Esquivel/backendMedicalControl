import { Router } from "express";
import { deleteUser, formData, getUser, getUserById, signIn, updateUser } from "../controllers/auth.controllers.js";
import { validateDataUser} from "../middlewares/authMiddleware.js";


const router = Router()

//create de routes for access de petitions
router.get('/', getUser)
router.get('/:userId', getUserById) // --> search user id in bd
router.post('/',validateDataUser , formData) // --> create new register
router.put('/:userId', updateUser) //  --> modify the register
router.delete('/:userId', deleteUser) // --> eliminate the user

router.post('/singIn',  signIn) //-> Controller signIn   ///validate token

export default router