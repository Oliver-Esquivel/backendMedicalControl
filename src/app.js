import express from 'express'
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors'
//routes
import authRoute from './routes/auth.routes.js'
import examRoute from './routes/examenMedico.routes.js'
import illnessRoute from './routes/illness.routes.js'
import physicalRoute from './routes/physical.routes.js'
import laboratoryRoute from './routes/laboratory.routes.js'


const app = express();
app.use(cors())
app.use(morgan('dev')) // Moderatos the petitions 
app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', authRoute)
app.use('/api/auth/examenMedico', examRoute)
app.use('/api/auth/illness', illnessRoute)
app.use('/api/auth/physical', physicalRoute)
app.use('/api/auth/laboratory', laboratoryRoute)


export default app

