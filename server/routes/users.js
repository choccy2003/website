var express = require('express');
var router = express.Router();
const Product = require('../models/products')
const Users = require('../models/users')
const Orders = require('../models/orders')

router.get('/listproducts', async (req, res, next) => {
  try {
    let products = await Product.find().exec()
    res.json(products)
  }
  catch (err) {
    res.json({ error: err })
  }

});
router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email, password }).exec();

    if (user) {
      res.send({ data: user, msg: "Login successful!" })
    }
    else {
      res.send("Login failed!")
    }
  }
  catch (err) {
    res.send("Login failed!", err)
  }

});
router.post('/signup', async (req, res, next) => {
  try {
    const { username, password, email, phone } = req.body;
    const user = await Users.findOne({ username }).exec();

    if (user) {
      res.send("Select another username!")
    }
    else {
      const newUser = new Users({ username, password, email, phone });
      await newUser.save();
      res.send("Signup successful! User registered.");
    }
  }
  catch (err) {
    res.json({ error: err })
  }

});
router.post('/addtocart', async (req, res, next) => {
  try {
    const { email, password, cart } = req.body;
    // Log the received cart for debugging
    const user = await Users.findOneAndUpdate(
      { email, password },
      { $set: { cart: cart } }
    ).exec();
    console.log("Updated User:", user); // Log the updated user object for debugging
    if (user) {
      console.log("Received Cart:", cart);
      res.send("Cart updated!");
    } else {
      res.send('no')
    }
  } catch (err) {
    console.error("Cart update failed:", err);
    res.send("Cart update failed! " + err.message);
  }
});

router.post('/order',async(req,res,next)=>{
  try{
const newOrder = new Orders(req.body);
const order = await newOrder.save();

    if(order){
      res.send('Success')
    }
    else{
      res.send("failure")
    }
  }
  catch(err){
    res.send(err)
  }
})


module.exports = router;
