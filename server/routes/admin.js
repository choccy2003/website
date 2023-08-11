var express = require('express');
var router = express.Router();
const Product = require('../models/products')
const Orders = require('../models/orders')
/* GET home page. */
router.post('/addproduct', async (req, res, next) => {
    try {
        const existingProducts = await Product.find();
        const newProductData = req.body;
        newProductData.id = existingProducts.length ;

        const newProduct = await new Product(newProductData).save();
        res.json({
            msg: "Success",
            success: true,
            data: newProduct
        });
    } catch (err) {
        res.json({
            msg: `Failure ${err}`,
            success: false
        });
    }
});
router.post('/deleteproduct', async (req, res, next) => {
    try {
        const { id } = req.body
        const exs = await Product.findOne({ id }).exec()
        if (exs) {
            const { name, id, category } = req.body
            let products = await Product.findOneAndDelete({ name, id, category }).exec();
            res.json({
                msg: "Deleted successfully",
                success: true,
                data: products
            })
        }
        else {
            res.json({ msg: "No such product exists" })
        }


    }
    catch (err) {
        res.json({
            msg: `Failure ${err}`,
            success: false
        })
    }

})

router.get('/getorders', async (req, res, next) => {
    try {
       const order=await Orders.find()
       res.json(order)
    } catch (err) {
        res.json({
            msg: `Failure ${err}`,
            success: false
        });
    }
});

module.exports = router;
