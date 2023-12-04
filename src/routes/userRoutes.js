import { Router } from "express";

const router = new Router();

console.log('loding userRoutes');

const userDB = [
    {
        id: '1',
        name: 'Ed',
        email: 'ed@example.com',
        phone: '3016453022',
        country: 'CO',
        createdAt: new Date()
    },
    {
        id: '2',
        name: 'Caro',
        email: 'caro@example.com',
        phone: '3147107177',
        country: 'ES',
        createdAt: new Date()
    },
    {
        id: '3',
        name: 'Sam',
        email: 'sam@example.com',
        phone: '3016445522',
        country: 'BR',
        createdAt: new Date()
    },
]

router.get('/users', (req, res) => {
    console.log('file: userRoutes.js -> /users')
    
    res.send(userDB')
})

router.post('/createUser', (req, res) => {
})

export default router