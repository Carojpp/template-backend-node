import { Router } from 'express'
import { getAccounts } from '../controllers/accountController.js';

const router = new Router()

console.log('loding accountRoutes');


/* get all accounts */
router.get('/accounts', (req, res) => {
    console.log('file: accountRoutes.js -> /accounts')
    const accounts = getAccounts()
    res.send(accounts) 
})

/* create an account */
router.post('/createAccount', (req, res) => {
    const { body } = req
    console.log({ body })
    res.send({
        message: 'Create account', 
        ...body
    })
})

export default router