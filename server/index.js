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
    image: ['../images/tshirta1.png', '../images/tshirta2.png', '../images/tshirta3.png'],
  }, {
    name: "Tshirt",
    price: 2500,
    quantity: 0,
    rating: 5,
    review: 14,
    id: 1,
    size: "Size",
    image: ['../images/tshirtb1.png', '../images/tshirtb2.png', '../images/tshirtb3.png']
  }, {
    name: "Jeans",
    price: 4000,
    quantity: 0,
    rating: 3,
    review: 116,
    id: 2,
    size: "Size",
    image: ['../images/jeansa1.png', '../images/jeansa2.png', '../images/jeansa3.png']
  }, {
    name: "Jeans",
    price: 10000,
    quantity: 0,
    rating: 4,
    review: 83,
    id: 3,
    size: "Size",
    image: ['../images/jeansb1.png', '../images/jeansb2.png', '../images/jeansb3.png']
  }, {
    name: "Shoes",
    price: 4000,
    quantity: 0,
    rating: 4,
    review: 26,
    id: 4,
    size: "Size",
    image: ['../images/shoea1.png', '../images/shoea2.png', '../images/shoea3.png']
  }, {
    name: "Shoes",
    price: 4000,
    quantity: 0,
    rating: 5,
    review: 59,
    id: 5,
    size: "Size",
    image: ['../images/shoec1.png', '../images/shoec2.png', '../images/shoec3.png']
  }, {
    name: "Shoes",
    price: 4000,
    quantity: 0,
    rating: 2,
    review: 36,
    id: 6,
    size: "Size",
    image: ['../images/shoed1.png', '../images/shoed2.png', '../images/shoed3.png']
  }, {
    name: "Shoes",
    price: 4000,
    quantity: 0,
    rating: 5,
    review: 16,
    id: 7,
    size: "Size",
    image: ['../images/shoea1.png', '../images/shoea2.png', '../images/shoea3.png']
  }, {
    name: "Tshirt",
    price: 4000,
    quantity: 0,
    rating: 2,
    review: 56,
    id: 8,
    size: "Size",
    image: ['../images/tshirta1.png', '../images/tshirta2.png', '../images/tshirta3.png']
  }]
  res.json(file1);
});
app.listen(3001);