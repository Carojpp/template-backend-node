/*
que debo hacer para inciar?
     Una funcion llamada getAccounts que devuelva el arreglo llamado accountsDB
*/

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

const getAccountsModels = () => {
    console.log('file: accountModel.js - getAccountsModels')
    return accountDB
}

export {
    getAccountsModels
}