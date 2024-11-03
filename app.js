import express from 'express';

const app = express();

app.use(express.json())

app.post('/api/sundayNotes/register', (req,res) => {
    const {name,email} = req.body;

    res.status(200).json({name,
        email
    })
})


export default app;
