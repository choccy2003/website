var express = require('express');
var router = express.Router();
const Product = require('../models/products')
/* GET home page. */
router.post('/addproduct', async (req, res, next) => {
    try {
        const { id } = req.body
        const exs = await Product.findOne({ id }).exec()

        if (exs) {
            res.json({ msg: 'a product already exists with following ID' })
        }
        else {
            let products = await new Product(req.body).save();
            res.json({
                msg: "Success",
                success: true,
                data: products
            })
        }

    }
    catch (err) {
        res.json({
            msg: `Failure ${err}`,
            success: false
        })
    }

})
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

module.exports = router;
