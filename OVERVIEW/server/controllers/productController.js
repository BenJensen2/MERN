const mongoose = require("mongoose");
const Product = mongoose.model("Product");

module.exports = {
  index: (req, res) => {
    console.log("Index pinggg-ed");
    res.json({
      // Our response to this function being called
      message: "Hello World",
    });
  },

  getProducts: (req, res) => {
    Product.find()
      .then((product) => {
        // product is the parameter passed into .then function
        console.log("We are in product.find");
        res.json(product); // responding with a .json object of the product
      })
      .catch((err) => res.json(err)); //res.status(400).json(err)
  },

  createProduct: (req, res) => {
    console.log("We are creating a product");
    console.log(req.body);
    Product.create(req.body)
      .then((product) => {
        console.log("Product Created");
        res.json(product);
      })
      .catch((err) => {
        res.json(err)
        console.log(err)
      }); //res.status(400).json(err)
  },

  getProductByid: (req, res) => {
    Product.findOne({ _id: req.params.id })
      .then((product) => {
        // product is the parameter passed into .then function
        console.log("We found the product!");
        res.json(product); // responding with a .json object of the product
      })
      .catch((err) => res.json(err));
  },

  updateProduct: (req, res) => {
    console.log("Update Product");
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, {
      runValidators: true,
      new: true,
    })
      .then((product) => {
        // product is the parameter passed into .then function
        console.log("We found the product!");
        res.json(product); // responding with a .json object of the product
      })
      .catch((err) => res.json(err));
  },

  deleteProduct: (req, res) => {
    Product.deleteOne({ _id: req.params.id })
      .then((response) => res.json(response))
      .catch((err) => res.json(err));
  },
};
