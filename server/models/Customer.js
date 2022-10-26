const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  customer: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  email: {
    type: String,
    required: true,
  },
  feedback: {
    type: String,
    required: true,
  }
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;