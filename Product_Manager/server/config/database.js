const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/Product_Manager", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

require('../models/Product');