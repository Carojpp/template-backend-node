/*
que debo hacer para inciar?
     Una funcion llamada getAccounts que devuelva el arreglo llamado accountsDB
*/

const accountDB = [ //base de datos
    {
        id: '1',
        name: 'One',
        createdAt: new Date()
    },
    {
        id: '2',
        name: 'Two',
        createdAt: new Date()
    }
]

const getAccountsModels = () => { // declaramos la función getAccountsModels 
    console.log('file: accountModel.js - getAccountsModels')
    return accountDB // me retornar el objeto accountDB que el objeto que contiene la información de los accounts (Id, name, createdAt)
}

//Estamos creando una ruta que nos permita filtar nuestro arreglo(db) por el nombre del account

const getAccountByNameModels = (name) => { //  
    console.log('file: accountModel.js - getAccountByNameModels')
    const result = accountDB.filter((account) => account.name === name); //filtramos nuestra base de datos por el parametro name es decir buscamos dentro de nuestra base de datos los accounts que coinciden con el nombre que estamos mandando desde postman
    if (result.length===0){ // si no encuentra resultados el arreglo es vacio
        return `No se encontraron resultados para ${name}` //si no coincide el nombre regresa este mensaje y lo vemos en postman
    }
    return result // 
}

const createAccountModels = (params) => { //creamos la funcion con parametros (como nombres o los datos que necesitemos crear)
    console.log ('file: accountModel.js - getAccountModels') 
    const { name } = params // desestructramos (extraemos de una variable sus objetos) para extraer la propiedad name del objeto params
    accountDB.push({ name }) // agrega un nuevo objeto (name)
    return accountDB // retorna la base de datos actulizada 
}

export {
    getAccountsModels, getAccountByNameModels, createAccountModels // exporta las funciones que declaramos anteriormente
}