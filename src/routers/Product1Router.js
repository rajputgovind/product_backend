import express from 'express'
import { deleteProductById, fetchAllProducts, saveProduct } from '../controllers/Product1Controller.js'

const productRouter = express.Router()

productRouter.post('/products',saveProduct)
productRouter.get('/products',fetchAllProducts)
productRouter.delete('/products/:id',deleteProductById)
export default productRouter;