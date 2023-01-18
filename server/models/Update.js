const mongoose = require("mongoose");

const updateSchema = new mongoose.Schema({
  companyname: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  address: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  city: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  state: {
    type: String,
    enum: ["alabama", "alaska", "arizona", "arkansas", "california", "colorado", "delaware", "districtofcolumbia", "florida", "georgia", "hawaii", "idaho", "illinois", "indiana", "iowa", "kansas", "kentucky", "louisiana", "maine", "maryland", "massachusetts", "michigan", "minnesota", "mississippi", "missouri", "montana", "nebraska", "nevada", "newhampshire", "newjersey", "newmexico", "newyork", "northcarolina", "northdakota", "ohio", "oklahoma", "oregon", "pennsylvania", "rhodeisland", "southcarolina", "southdakota", "tennessee", "texas", "utah", "vermont", "virginia", "washington", "westvirginia", "wisconsin"]
  },
  zipcode: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  phone: {
    type: String
  },  
  email: {
    type: String
  },
  bio: {
    type: String
  },
  web: {
    type: String,
  },
  review: {
    type: String,
    enum: ["yes", "no"]
  },
  profession: [String]
});

const Update = mongoose.model("Update", updateSchema);

module.exports = Update;