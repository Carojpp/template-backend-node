import { Router } from "express";
import { getUsers, createUser } from '../controllers/userController.js';

const router = new Router();

console.log('loding userRoutes');


router.get('/users', (req, res) => {
    console.log('file: userRoutes.js -> /users')
    const users = getUsers()    
    res.send(users);
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