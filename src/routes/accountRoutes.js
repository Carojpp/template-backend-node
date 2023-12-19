import { Router } from 'express'
import { getAccounts, createAccount, getAccountByName } from '../controllers/accountController.js'; // importamos el controlador desde la ruta (conectamos la ruta)

const router = new Router() //Creamos una nueva instancia del enrutador(registra la información de las rutas definidas en routes)

console.log('loding accountRoutes');

/* get all accounts */
router.get('/accounts', (req, res) => { // creamos la ruta que retornara todos los accounts
    console.log('file: accountRoutes.js -> /accounts')
    const accounts = getAccounts() // accounts llama a la funcion getAccounts que se encuentra en el controller (el resultado se almacena en accounts)
    res.send(accounts)//envia la información de accounts
})

//Estamos creando una ruta que nos permita filtar nuestro arreglo(db) por el nombre del account
router.get('/accounts/:name', (req,res) => { // creamos la ruta para buscar por nombre, idName es un parametro de ruta, por lo que puede ser reemplazado por cualquier valor en la URL
    console.log('file: router.js -> /accounts/name')
    const { params,query } = req // desestructuramos la variable req, obtemos la variable params y dentro de esta se encuentra el valor de idName de la URL
    console.log({params,query})
    const { name } = params // desestructure el parametro name
    const result = getAccountByName(name) // envie el parametro name hacia el controller
    res.send({result, route:'accounts/:name'}) // tenemos un objeto como respuesta, IdName contiene el valor que la URL que solictamos
});

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