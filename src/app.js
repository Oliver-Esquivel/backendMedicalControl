import express from 'express'
import morgan from 'morgan';
import authRoute from './routes/auth.routes.js'
import bodyParser from 'body-parser';
import { validateDataUser } from './middlewares/authMiddleware.js';
import { formData } from './controllers/auth.controllers.js';
import { validateDataExamenMedico } from './middlewares/examenMedico.middleware.js';
import { dataClinic } from './controllers/authForm.controllers.js';

const app = express();
app.use(morgan('dev')) // Moderatos the petitions 
app.use(express.json())
app.use('/api/auth', authRoute)

app.use(bodyParser.json())
// --> validate duplicate user data, 
app.post('/api/auth/', validateDataUser, formData )
// --> data require 
app.post('/api/auth/clinic/', validateDataExamenMedico, dataClinic)

export default app

