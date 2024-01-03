import express from 'express'
import morgan from 'morgan';
import authRoute from './routes/auth.routes.js'
import bodyParser from 'body-parser';


const app = express();
app.use(morgan('dev')) // Moderatos the petitions 
app.use(express.json())
app.use('/api/auth', authRoute)

app.use(bodyParser.json()) 

export default app

