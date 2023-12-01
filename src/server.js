import express from 'express';

const app = express();
const PORT = 7000;

app.get('/back', (req, res)  => {
    res.send('Esto es un cambio')
})


app.use('/api', (req, res)  => {
    res.send('Welcome to template backend node')
})

app.listen(PORT, console.log('Server listening on http://localhost:7000/api'));
