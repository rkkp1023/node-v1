
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var register = new Schema({
    firstName: String,
    lastName: String,
    address: {
        street: String,
        city: String,
        state: String,
        zip: String
    },
}, { timestamps: {} });

var registerModel = mongoose.model('Register', register);
module.exports = registerModel;