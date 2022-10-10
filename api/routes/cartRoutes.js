import express from 'express'
import { cartController } from '../controllers/index.js'

const router = express.Router()

router
    .post('/createcart', cartController.createCart)
    .get('/carts', cartController.getAllCart)
    .delete('/deletecart/:id', cartController.deleteCart)
    .put('/updatecart/:id', cartController.updateCart)

export default router