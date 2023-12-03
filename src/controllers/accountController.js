/*
¿Que debo hacer? 
   
*/
import { getAccountsModels } from "../models/accountModel.js"

const getAccounts = () => {
    console.log('file: accountController.js - getAccounts')
    const accounts = getAccountsModels()
    return accounts
}

export {
    getAccounts 
}