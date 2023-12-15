const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  customer: {
    type: String
  },
  company: {
    type: String
  },
  email: {
    type: String
  },
  feedback: {
    type: String
  }
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;