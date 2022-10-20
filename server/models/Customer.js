const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: {
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

const information = mongoose.connection.useDb('information');

const Customer = information.model("Customer", customerSchema);

module.exports = Customer;