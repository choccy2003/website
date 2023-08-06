var mongoose=require('mongoose')
var Schema=mongoose.Schema;
var products= new Schema(
    {
        name:String,
        price: Number,
        quantity: Number,
        rating: Number,
        review: Number,
        id: Number,
        category: String,
        size: String,
        image:{type:[String]}
    }
)
var Products=mongoose.model('Products',products)
module.exports=Products