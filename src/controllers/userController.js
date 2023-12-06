import { getUsersModels, createUserModels } from "../models/userModel.js"


const getUsers = () => {
    console.log('file: userController.js - getUsers')
    const users = getUsersModels()
    return users
}


const createUser = (params) => {
    console.log('file: userController.js - getUsers')
    const users = createUserModels(params)
    return users
}

export {
    getUsers, createUser
}