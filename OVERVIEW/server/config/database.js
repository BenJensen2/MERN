const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/MERNOverview", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Established a connection to the MERNOverview database"))
  .catch((err) =>
    console.log("Something went wrong when connecting to the database", err)
  );

require("../models/Author");
require("../models/Person");
require("../models/Product");