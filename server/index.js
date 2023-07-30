const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.get('/', function (req, res) {
  let file1 = [{

    name: "Tshirt",
    price: 5000,
    quantity: 0,
    rating: 4,
    review: 66,
    id: 0,
    size: "Size",
  }, {
    name: "Shirt",
    price: 2500,
    quantity: 0,
    rating: 5,
    review: 14,
    id: 1,
    size: "Size",
  }, {
    name: "Jeans",
    price: 4000,
    quantity: 0,
    rating: 3,
    review: 116,
    id: 2,
    size: "Size",
  }, {
    name: "Jacket",
    price: 10000,
    quantity: 0,
    rating: 4,
    review: 83,
    id: 3,
    size: "Size",
  }, {
    name: "Shoes",
    price: 4000,
    quantity: 0,
    rating: 4,
    review: 26,
    id: 4,
    size: "Size",
  }, {
    name: "Shoes",
    price: 4000,
    quantity: 0,
    rating: 5,
    review: 59,
    id: 5,
    size: "Size",
  }, {
    name: "Shoes",
    price: 4000,
    quantity: 0,
    rating: 2,
    review: 36,
    id: 6,
    size: "Size",
  }, {
    name: "Shoes",
    price: 4000,
    quantity: 0,
    rating: 5,
    review: 16,
    id: 7,
    size: "Size",
  }, {
    name: "Shoes",
    price: 4000,
    quantity: 0,
    rating: 2,
    review: 56,
    id: 8,
    size: "Size",
  }]
  res.json(file1);
});
app.listen(3001);