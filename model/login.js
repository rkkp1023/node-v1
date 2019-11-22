
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var login = new Schema({
    name: String,
    password: String
}, { timestamps: {} });

var loginModel = mongoose.model('login', login);
module.exports = loginModel;