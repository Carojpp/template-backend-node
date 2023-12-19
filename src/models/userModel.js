const userDB = [
    {
        id: '1',
        name: 'Ed',
        email: 'ed@example.com',
        phone: '3016453022',
        country: 'CO',
        createdAt: new Date()
    },
    {
        id: '2',
        name: 'Caro',
        email: 'caro@example.com',
        phone: '3147107177',
        country: 'ES',
        createdAt: new Date()
    },
    {
        id: '3',
        name: 'Sam',
        email: 'sam@example.com',
        phone: '3016445522',
        country: 'BR',
        createdAt: new Date()
    },
]

const getUsersModels = () => {
    console.log ('file: userModel.js - getUsersModels')
    return userDB
}

const getUserEmailModels = (email) => {
    console.log('file userModels.js - getUserEmailModels')
    const result = userDB.filter((user) => user.email === email); //filtramos nuestra base de datos por el parametro email es decir buscamos dentro de nuestra base de datos los users que coinciden con el nombre que estamos mandando desde postman
    if (result.length===0){ // si no encuentra resultados el arreglo es vacio
        return `No se encontraron resultados para ${email}` //si no coincide el email regresa este mensaje y lo vemos en postman
    }
}

const createUserModels = (params) => {
    console.log ('file: userModel.js - getUsersModels')
    const { name, email, phone, country} = params
    userDB.push({ name, email, phone, country})
    return userDB
}

export {
    getUsersModels, getUserEmailModels, createUserModels
}