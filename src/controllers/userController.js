import { getUsersModels, getUserEmailModels, createUserModels } from "../models/userModel.js"


const getUsers = () => {
    console.log('file: userController.js - getUsers')
    const users = getUsersModels()
    return users
}

const getUserEmail = (email) => { // creamos la funcion y a esta le esta pasando el parametro email
    console.log({ email, pos:'getUserEmail' }) //añadimos la propiedad pos
    const userEmail = getUserEmailModels(email) // envio el parametro a models
    return userEmail
}

const createUser = (params) => {
    console.log('file: userController.js - getUsers')
    const users = createUserModels(params)
    return users
}

export {
    getUsers, getUserEmail, createUser
}