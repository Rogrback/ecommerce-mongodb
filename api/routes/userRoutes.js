import express from 'express'
import { userController } from '../controllers/index.js'

const router = express.Router()

router
    .post('/createuser', userController.createUser)
    .get('/users', userController.getAllUsers)
    .delete('/deleteuser/:id', userController.deleteUser)
    .put('/update/:id', userController.updatePassword)

export default router