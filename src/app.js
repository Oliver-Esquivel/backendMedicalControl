import express from 'express'
import morgan from 'morgan';
import authRoute from './routes/auth.routes.js'

const app = express();

app.use(morgan('dev')) // Moderatos the petitions 
app.use(express.json())
app.use('/api/auth', authRoute)

export default app

