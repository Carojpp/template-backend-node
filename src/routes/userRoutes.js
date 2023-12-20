import { Router } from "express";
import { getUsers, getUserEmail, getUserTelefono, createUser } from '../controllers/userController.js';

const router = new Router();

console.log('loding userRoutes');


router.get('/users', (req, res) => {
    console.log('file: userRoutes.js -> /users')
    const users = getUsers()    
    res.send(users);
})

//Estamos creando una ruta que nos permita filtar nuestro arreglo(db) por el email del users

router.get('/users/:email', (req,res) => { // creamos la ruta para buscar por el email
    console.log('file: userRoutes.js -> email')
    const { params,query } = req // desestructuramos la variable req, obtenemos la variable params y dentro de esta se encuenta el valor de email de la URL
    console.log({params,query})
    const { email } = params // desestruturo el parametro email
    const result = getUserEmail(email)//envie el parametro email al controlador
    res.send({result, route:'/users/:email'}) // tenemos un objeto como respuesta, email contiene el valor de la URL que solicitamos
})

router.get('/usersTelefono/:phone', (req,res) => { // creamos la ruta para buscar por telefono, no son necesarios los : en la ruta de la URl para que me traiga la información
    console.log('file: userRoutes.js -> phone')
    const { params,query } = req // desestructuramos la variable req, 
    console.log({params,query})
    const { phone } = params // desestructuro el parametro telefono (este debe ser igual al nombre que registra en la base de datos en este caso como phone)
    const result = getUserTelefono(phone) // envio el parametro telefono al controlador
    res.send({result, route:'/usersTelefono/:phone'}) // se añade la propiedad route con el valor de la ruta
})

router.post('/createUser', (req, res) => {
    const { body } = req
    console.log({ body })
    const { name, email, phone, country} = body
    const users = createUser({name, email, phone, country})
    console.log({ name, email, phone, country})
    res.send({
        message: 'Create user', 
        ...body,
        users
    })
})

export default router