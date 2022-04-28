let mongoose = require("mongoose")
let schema = require("./schema")

user_schema = schema.users
transaction_schema = schema.transactions

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/food');
}

const User = mongoose.model('user', user_schema);
const Transaction = mongoose.model('transaction', transaction_schema);

module.exports = {User, Transaction}