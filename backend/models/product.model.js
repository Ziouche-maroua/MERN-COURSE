import mongoose from 'mongoose'

const productModel = new  mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    
}
,
{
    timestamps:true  // for createdAt and updatedAt
})

const Product = mongoose.model('Product',productModel)

export default Product