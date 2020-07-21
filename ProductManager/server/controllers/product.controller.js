const Product = require("../models/product.model");
const { request, response } = require("express");

module.exports = {
  index: (request, response) => {
    console.log("Index pinggg-ed");
    response.json({
      message: "Hello World",
    });
  },
  getProducts: (request, response) => {
    Product.find()
      .then((product) => response.json(product))
      .catch((err) => response.json(err));
  },

  createProduct: (request, response) => {
    console.log(request.body);
    Product.create(request.body)
      .then((product) => response.json(product))
      .catch((err) => response.json(err));
  },
};
