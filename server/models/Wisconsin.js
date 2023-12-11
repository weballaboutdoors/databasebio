const mongoose = require("mongoose");

const wisconsinSchema = new mongoose.Schema({
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

const Wisconsin = mongoose.model("Wisconsin", wisconsinSchema);

module.exports = Wisconsin;