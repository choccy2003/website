var mongoose=require('mongoose')
var Schema=mongoose.Schema;
var users= new Schema(
    {
        username:{type:String},
        phone: {type:String},
        email: {type:String},
        user_id: Number,
        password: {type:String},
        cart:{
            id:{
                type:String,
                
            },
            name: {
              type: String,
             
            },
            price: {
              type: Number,
              
            },
            quantity: {
              type: Number,
             
            },
            size: {
              type: String,
              
            }}
     
    }
)
var Users=mongoose.model('Users',users)
module.exports=Users