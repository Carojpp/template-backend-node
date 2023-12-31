import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser'

/* call routes */
import accountRoutes from './routes/accountRoutes.js' //importamos las rutas desde routes
import userRoutes from './routes/userRoutes.js'

const app = express();
const PORT = 7000; // puerto sobre el que vamos a trabajar

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

app.use(accountRoutes) // Se intengran las rutas definidas de routes
app.use(userRoutes)

app.get('/back', (req, res)  => {
    res.send('Esto es un cambio')
}) // 

app.listen(PORT, console.log('Server listening on http://localhost:7000/api')); // servidor que recibe la información

// __dirname
