const mongoose = require("mongoose");
const Author = mongoose.model("Author");

module.exports = {
  index: (req, res) => {
    console.log("Index pinggg-ed");
    res.json({
      // Our response to this function being called
      message: "Hello World",
    });
  },

  getAuthors: (req, res) => {
    Author.find()
      .then((author) => {
        // author is the parameter passed into .then function
        console.log("We are in author.find");
        res.json(author); // responding with a .json object of the author
      })
      .catch((err) => res.json(err)); //res.status(400).json(err)
  },

  createAuthor: (req, res) => {
    console.log("We are creating a author");
    console.log(req.body);
    Author.create(req.body)
      .then((author) => {
        console.log("Product Created");
        res.json(author);
      })
      .catch((err) => res.json(err)); //res.status(400).json(err)
  },

  getAuthorByid: (req, res) => {
    Author.findOne({ _id: req.params.id })
      .then((author) => {
        // author is the parameter passed into .then function
        console.log("We found the author!");
        res.json(author); // responding with a .json object of the author
      })
      .catch((err) => res.json(err));
  },

  updateAuthor: (req, res) => {
    console.log("Update Product");
    Author.findOneAndUpdate({ _id: req.params.id }, req.body, {
      runValidators: true,
      new: true,
    })
      .then((author) => {
        // author is the parameter passed into .then function
        console.log("We found the author!");
        res.json(author); // responding with a .json object of the author
      })
      .catch((err) => res.json(err));
  },

  deleteAuthor: (req, res) => {
    Author.deleteOne({ _id: req.params.id })
      .then((response) => res.json(response))
      .catch((err) => res.json(err));
  },
};
