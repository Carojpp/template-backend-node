import { getUsersModels } from "../models/userModel.js"

const getUsers = () => {
    console.log('file: userController.js - getUsers')
    const users = getUsersModels()
    return users
}
export {
    getUsers
}