import express from 'express'
import { productController } from '../controllers/index.js'

const router = express.Router()

router
    .post('/createproduct', productController.createProduct)
    .get('/products', productController.getAllProducts)
    .delete('/deleteproduct/:id', productController.deleteProduct)
    .put('/update/:id', productController.updateProduct)

export default router