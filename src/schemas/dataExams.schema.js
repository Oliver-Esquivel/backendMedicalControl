
import {z} from 'zod'
// We validate the fields that are necessary to identify the user.
export const dataExams = z.object({
    examen_medico: z.string({
        required_error: "You cannot leave the 'medical_exam' field empty."
    }),
    name_person: z.string({
        required_error: "You cannot leave the 'name person' field empty."
    }),
    age: z.number({
        required_error: "Cannot leave the 'age' field empty"
    }),
    gender: z.string({
        required_error: "enter your gender"
    }).optional()

})