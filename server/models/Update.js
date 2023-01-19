const mongoose = require("mongoose");

const updateSchema = new mongoose.Schema({
  companynameUpdate: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  addressUpdate: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  cityUpdate: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  stateUpdate: {
    type: String,
    required: true,
    enum: ["alabama", "alaska", "arizona", "arkansas", "california", "colorado", "delaware", "districtofcolumbia", "florida", "georgia", "hawaii", "idaho", "illinois", "indiana", "iowa", "kansas", "kentucky", "louisiana", "maine", "maryland", "massachusetts", "michigan", "minnesota", "mississippi", "missouri", "montana", "nebraska", "nevada", "newhampshire", "newjersey", "newmexico", "newyork", "northcarolina", "northdakota", "ohio", "oklahoma", "oregon", "pennsylvania", "rhodeisland", "southcarolina", "southdakota", "tennessee", "texas", "utah", "vermont", "virginia", "washington", "westvirginia", "wisconsin"]
  },
  zipcodeUpdate: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  phoneUpdate: {
    type: String
  },  
  emailUpdate: {
    type: String
  },
  bioUpdate: {
    type: String
  },
  webUpdate: {
    type: String
  },
  reviewUpdate: {
    type: String,
    enum: ["yes", "no"]
  },
  professionUpdate: [String]
});

const Update = mongoose.model("Update", updateSchema);

module.exports = Update;