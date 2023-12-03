import { Router } from 'express'

const router = new Router()

console.log('loding accountRoutes');

const accountDB = [
    {
        id: '1',
        name: 'Cuenta One',
        createdAt: new Date()
    },
    {
        id: '2',
        name: 'Cuenta Two',
        createdAt: new Date()
    }
]

/* get all accounts */
router.get('/accounts', (req, res) => {
    console.log('file: accountRoutes.js -> /accounts')
    
    res.send(accountDB)
})

/* create an account */
router.post('/createAccount', (req, res) => {

})

export default router