import express from 'express';


const app = express();

app.use(express.json())

//Route to send the name and email of the user.
app.post('/api/sundayNotes/register', (req,res) => {
    const {name,email} = req.body;
  
    res.status(200).json({name,
        email
    })
})



export default app;
