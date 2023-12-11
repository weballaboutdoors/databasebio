const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  customer: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  feedback: {
    type: String,
    required: true
  }
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;