const mongoose = require("mongoose");

const washingtonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
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
  }
});

const Washington = mongoose.model("Washington", washingtonSchema);

module.exports = Washington;