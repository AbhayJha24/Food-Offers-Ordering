let mongoose = require("mongoose")

const users = new mongoose.Schema({
    name: String,
    phone: Number,
    email: String,
    pass: String
});

const transactions = new mongoose.Schema({
    items: Object,
    phone: Number,
    email: String
});

module.exports = {users, transactions}