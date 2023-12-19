/*
que debo hacer para inciar?
     Una funcion llamada getAccounts que devuelva el arreglo llamado accountsDB
*/

const accountDB = [ //base de datos
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

const getAccountsModels = () => { // declaramos la función getAccountsModels 
    console.log('file: accountModel.js - getAccountsModels')
    return accountDB // me retorna la información que tenemos en la base de datos
}

const createAccountModels = (params) => { //creamos la funcion con parametros (como nombres o los datos que necesitemos crear)
    console.log ('file: accountModel.js - getAccountModels') 
    const { name } = params // desestructramos (extraemos de una variable sus objetos) para extraer la propiedad name del objeto params
    accountDB.push({ name }) // agrega un nuevo objeto (name)
    return accountDB // retorna la base de datos actulizada 
}

export {
    getAccountsModels, createAccountModels // exporta las funciones que declaramos anteriormente
}