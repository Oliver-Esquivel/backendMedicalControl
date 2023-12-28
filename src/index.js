import app from "./app.js";
import { connectDB } from './bd.js'; // importamos la funcion de la conexion ala base de datos

connectDB();
//inicamos el servidor 
app.listen(4000)



console.log("server on port" , 4000)
