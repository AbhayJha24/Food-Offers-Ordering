let mongoose = require("mongoose")

const users = new mongoose.Schema({
    name: String,
    phone: Number,
    email: String,
    pass: String
});

module.exports = users