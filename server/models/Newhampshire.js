const mongoose = require("mongoose");

const newhampshireSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  state: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  zipcode: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  phone: {
    type: String,
    required: true,
  },  
  email: {
    type: String,
    required: true,
  },
  profession: [String]
});

const Newhampshire = mongoose.model("Newhampshire", newhampshireSchema);

module.exports = Newhampshire;