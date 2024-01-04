import formDataExamenModel from "../models/formDataExamen.model.js";
import jwt from 'jsonwebtoken'
export const validateDataPatient = async (req, res, next) => {
    try {
        const {name_person, name_supervisor} = req.body;

            console.log('Request body', req.body)
            // --> we validate that the fields are filled 
        if (!name_person || !name_supervisor) {
            return res.status(400).json({ message: 'Data obligatory' });
        }
            // -> checks if the user exists
        const existingUser = await formDataExamenModel.findOne({ name_person });
        if (existingUser) {
            return res.status(400).json ({ message: 'User already exists' });
        }
        console.log("validation passed")
        //
        next();
    } catch (error) {
        res.status(500).json({ message: 'Error in server', error });
    }
};

//   --> validate token the user before the create consult
/*
function to validate that there is a token in the header as a permission or key to perform actions. 
*/
 export const authenticated = async(req, res, next) =>{  
    try {
        //check the token in header
        const token = req.header('Authorization')
            if(!token) {   //si no encuentra in token niega el permiso
                return res.status(401).json({message: 'Access not authorization'})
            }
            jwt.verify(token, 'Hola',(err, user) =>{
                if(err){ // manejo de errores
                    return res.status(403).json({message: "access not authorization"})
                }
                req.user= user;
                console.log(req.user)
                next()
            })
    } catch (error) {
        
    }
 }

