const mongoose = require('mongoose');
const PersonSchema = new mongoose.Schema({
    firstName: String,
    lastName: String

    // firstName: { type: String },
    // lastName: { type: String }
}, { timestamps: true });
module.exports.Person = mongoose.model('Person', PersonSchema);

