var express = require('express');
var router = express.Router();
const Product = require('../models/products')
const Users = require('../models/users')

router.get('/listproducts', async(req, res, next)=> {
  try{
    let products=await Product.find().exec()
 res.json(products)
  }
  catch(err){
    res.json({error:err})
  }
 
});
router.post('/login', async(req, res, next)=> {
  try{
    const { username, password } = req.body;
    const user = await Users.findOne({ username, password }).exec();
 
 if(user){
  res.send({data:user,msg:"Login successful!"})
 }
 else{
  res.send("Login failed!")
 }
  }
  catch(err){
    res.send("Login failed!",err)
  }
 
});
router.post('/signup', async(req, res, next)=> {
  try{
    const { username, password, email,phone } = req.body;
    const newUser = new Users({ username, password, email,phone });
    await newUser.save();
    if(newUser){
       res.send("Signup successful! User registered.");
    }
   
  }
  catch(err){
    res.json({error:err})
  }
 
});

module.exports = router;
