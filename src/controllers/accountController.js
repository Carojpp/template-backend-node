/*
¿Que debo hacer? 
   
*/
import { getAccountsModels, createAccountModels } from "../models/accountModel.js" // importamos los models desde controllers (conectamos la ruta)

const getAccounts = () => { // declaramos la funcion
    console.log('file: accountController.js - getAccounts') // con esto sabemos donde y cuando se ejecuta
    const accounts = getAccountsModels() // la funcion accounts llama a getAccountsModel (la información que se contiene en models)
    return accounts // la funcion me retorna el valor de accounts
}

const createAccount = (params) => { // se crea la función createAccounts, cuenta con un parametro que tiene la información necesaria para crear la nueva ruta
    console.log('file: accountController.js - getAccounts')
    const accounts = createAccountModels(params) // la funcion accounts llama otra funcion (createAccountModels, que es actua como db) y pasa los parametros, el resultado se almacena en la variable accounts
    return accounts // 
}

export {
    getAccounts, createAccount // exporta las funciones que declaramos anteriormente
}