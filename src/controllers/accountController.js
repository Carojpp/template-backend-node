/*
¿Que debo hacer? 
   
*/
import { getAccountsModels, createAccountModels } from "../models/accountModel.js"

const getAccounts = () => {
    console.log('file: accountController.js - getAccounts')
    const accounts = getAccountsModels()
    return accounts
}

const createAccount = (params) => {
    console.log('file: accountController.js - getAccounts')
    const accounts = createAccountModels(params)
    return accounts
}

export {
    getAccounts, createAccount
}