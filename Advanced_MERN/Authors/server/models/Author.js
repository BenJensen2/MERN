const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true,"is required"],
    minlength: [2, "Author name must be at least 2 characters in length"]
  },
},
{timestamps: true})

mongoose.model("Author",AuthorSchema);