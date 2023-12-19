import { Router } from 'express'
import { getAccounts, createAccount } from '../controllers/accountController.js'; // importamos el controlador desde la ruta (conectamos la ruta)

const router = new Router() //Creamos una nueva instancia del enrutador(registra la información de las rutas definidas en routes)

console.log('loding accountRoutes');

/* get all accounts */
router.get('/accounts', (req, res) => { // creamos la ruta que respondera a la solicitudes
    console.log('file: accountRoutes.js -> /accounts')
    const accounts = getAccounts() // accounts llama a getAccounts (el resultado se almacena en accounts)
    res.send(accounts)//envia la información de accounts
})

/* create an account */
router.post('/createAccount', (req, res) => { // Creamos la ruta con metodo POST
    const { body } = req // imprime el cuerpo de la solicitud(body), 
    console.log({ body })
    const { name } = body // extrae de body, name 
    const accounts = createAccount({name})
    console.log({ name })
    res.send({
        message: 'Create account', 
        ...body,
        accounts // envia una respuesta que incluye un mensaje, body y datos de la cuenta que creamos
    })
})

export default router // esto permite que el enrutador se pueda importar