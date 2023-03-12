import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    pId:{type:Number,required:true, unique:true},
    pName:{type:String,required:true},
    pDescription:{type:String,required:true},
    pPrice:{type:String,required:true}

});

export const ProductModel = mongoose.model("PersonalProduct",productSchema)