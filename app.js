import express from 'express';
import { addUserEmail } from './controllers/userController.js';


const app = express();

app.use(express.json())

//Route to send the name and email of the user.
app.post('/api/sundayNotes/register', addUserEmail)



export default app;
