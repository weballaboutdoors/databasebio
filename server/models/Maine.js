const mongoose = require("mongoose");

const maineSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  address: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
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

const Maine = mongoose.model("Maine", maineSchema);

module.exports = Maine;