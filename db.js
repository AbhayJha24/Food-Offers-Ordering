let mongoose = require("mongoose")
let schema = require("./schema")

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/food');
}

const User = mongoose.model('user', schema);

module.exports = User