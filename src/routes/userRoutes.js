import { Router } from "express";
import { getUsers } from '../controllers/userController.js';

const router = new Router();

console.log('loding userRoutes');



router.get('/users', (req, res) => {
    console.log('file: userRoutes.js -> /users')
    const users = getUsers()    
    res.send(users);
})

router.post('/createUser', (req, res) => {
})

export default router