const mongoose = require('mongoose');
const Product = mongoose.model("Product")

module.exports = {
  index: (req, res) => {
    console.log("Index pinggg-ed");
    res.json({  // Our response to this function being called
      message: "Hello World",
    });
  },
  
  getProducts: (req, res) => {
    Product.find()
      .then((product) => { // product is the parameter passed into .then function
        console.log("We are in product.find");
        res.json(product) // responding with a .json object of the product
      })
      .catch((err) => res.json(err));
  },

  createProduct: (req, res) => {
    console.log("We are creating a product")
    console.log(req.body);
    Product.create(req.body)
      .then((product) => {
        console.log("Product Created")
        res.json(product)
      })
      .catch((err) => res.json(err));
  },

  getProductByid: (req, res) => {
    Product.findOne({_id: req.params.id})
      .then((product) => { // product is the parameter passed into .then function
        console.log("We found the product!");
        res.json(product) // responding with a .json object of the product
      })
      .catch((err) => res.json(err));
  },
};