const mongoose = require("mongoose");

const installerSchema = new mongoose.Schema({
  companynameSubmission: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  addressSubmission: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  citySubmission: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  stateSubmission: {
    type: String,
    required: true,
    enum: ["alabama", "alaska", "arizona", "arkansas", "california", "colorado", "delaware", "districtofcolumbia", "florida", "georgia", "hawaii", "idaho", "illinois", "indiana", "iowa", "kansas", "kentucky", "louisiana", "maine", "maryland", "massachusetts", "michigan", "minnesota", "mississippi", "missouri", "montana", "nebraska", "nevada", "newhampshire", "newjersey", "newmexico", "newyork", "northcarolina", "northdakota", "ohio", "oklahoma", "oregon", "pennsylvania", "rhodeisland", "southcarolina", "southdakota", "tennessee", "texas", "utah", "vermont", "virginia", "washington", "westvirginia", "wisconsin"]
  },
  zipcodeSubmission: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  phoneSubmission: {
    type: String,
    required: true
  },  
  emailSubmission: {
    type: String,
    required: true
  },
  bioSubmission: {
    type: String,
    required: true
  },
  webSubmission: {
    type: String,
  },
  reviewSubmission: {
    type: String,
    required: true,
    enum: ["yes", "no"]
  },
  professionSubmission: [String]
});

const Installer = mongoose.model("Installer", installerSchema);

module.exports = Installer;