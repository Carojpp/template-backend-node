/*
¿Que debo hacer? 
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

const getAccounts = () => {
    console.log('file: accountController.js - getAccounts')
    return accountDB
}

export {
    getAccounts 
}