import app from "./app.js";
import { connectDB } from './bd.js'; // import connect the data base

connectDB();
//connect on services
app.listen(4000)



console.log("server on port" , 4000)
