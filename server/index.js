const express = require('express');
const app = express();
const path = require('path');


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function (req, res) {
  let file1 = [{

    name: "Tshirt",
    price: 5000,
    quantity: 0,
    rating: 4,
    review: 66,
    id: 0,
    size: "Size",
    image: ["http://localhost:3001/images/tshirta1.png", "http://localhost:3001/images/tshirta2.png", "http://localhost:3001/images/tshirta3.png"],
  }, {
    name: "Tshirt",
    price: 2500,
    quantity: 0,
    rating: 5,
    review: 14,
    id: 1,
    size: "Size",
    image: ['http://localhost:3001/images/tshirtb1.png', 'http://localhost:3001/images/tshirtb2.png', 'http://localhost:3001/images/tshirtb3.png']
  }, {
    name: "Jeans",
    price: 4000,
    quantity: 0,
    rating: 3,
    review: 116,
    id: 2,
    size: "Size",
    image: ['http://localhost:3001/images/jeansa1.png', 'http://localhost:3001/images/jeansa2.png', 'http://localhost:3001/images/jeansa3.png']
  }, {
    name: "Jeans",
    price: 10000,
    quantity: 0,
    rating: 4,
    review: 83,
    id: 3,
    size: "Size",
    image: ['http://localhost:3001/images/jeansb1.png', 'http://localhost:3001/images/jeansb2.png', 'http://localhost:3001/images/jeansb3.png']
  }, {
    name: "Shoes",
    price: 4000,
    quantity: 0,
    rating: 4,
    review: 26,
    id: 4,
    size: "Size",
    image: ['http://localhost:3001/images/shoea1.png', 'http://localhost:3001/images/shoea2.png', 'http://localhost:3001/images/shoea3.png']
  }, {
    name: "Shoes",
    price: 4000,
    quantity: 0,
    rating: 5,
    review: 59,
    id: 5,
    size: "Size",
    image: ['http://localhost:3001/images/shoeb1.png', 'http://localhost:3001/images/shoeb2.png', 'http://localhost:3001/images/shoeb2.png']
  }, {
    id: 6,
    name: "Shoes",
    price: 4000,
    quantity: 0,
    rating: 2,
    review: 36,
    size: "Size",
    image: ['http://localhost:3001/images/shoed1.png', 'http://localhost:3001/images/shoed2.png', 'http://localhost:3001/images/shoed3.png']
  }, {
    name: "Shoes",
    price: 4000,
    quantity: 0,
    rating: 5,
    review: 16,
    id: 7,
    size: "Size",
    image: ['http://localhost:3001/images/shoea1.png', 'http://localhost:3001/images/shoea2.png', 'http://localhost:3001/images/shoea3.png']
  }, {
    name: "Tshirt",
    price: 4000,
    quantity: 0,
    rating: 2,
    review: 56,
    id: 8,
    size: "Size",
    image: ['http://localhost:3001/images/tshirta1.png', 'http://localhost:3001/images/tshirta2.png', 'http://localhost:3001/images/tshirta3.png']
  }]
  res.json(file1);
});
app.listen(3001);