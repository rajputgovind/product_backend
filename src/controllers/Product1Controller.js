import { ProductModel } from '../models/Product1Model.js'
import { StatusCodes } from 'http-status-codes'

export async function saveProduct(req,res){
    try {
        const product = ProductModel(req.body)
        const savedProduct = await product.save()
        res.status(StatusCodes.CREATED).json(savedProduct)
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"error in save data"})
    }

}
export async function fetchAllProducts(req,res){
    try {
        const products = await ProductModel.find()
        res.status(StatusCodes.OK).json(products)
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({message:"error in find data"})
    }
}

export async function deleteProductById(req,res){
    try {
        const product = await ProductModel.findByIdAndDelete(req.params.id)
        res.status(StatusCodes.NO_CONTENT).json()
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({message:"error in find data"})
    }
}