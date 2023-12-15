const mongoose = require("mongoose");

const updateSchema = new mongoose.Schema({
  companynameUpdate: {
    type: String
  },
  stateUpdate: {
    type: String,
    enum: ["empty", "alabama", "alaska", "arizona", "arkansas", "california", "colorado", "delaware", "districtofcolumbia", "florida", "georgia", "hawaii", "idaho", "illinois", "indiana", "iowa", "kansas", "kentucky", "louisiana", "maine", "maryland", "massachusetts", "michigan", "minnesota", "mississippi", "missouri", "montana", "nebraska", "nevada", "newhampshire", "newjersey", "newmexico", "newyork", "northcarolina", "northdakota", "ohio", "oklahoma", "oregon", "pennsylvania", "rhodeisland", "southcarolina", "southdakota", "tennessee", "texas", "utah", "vermont", "virginia", "washington", "westvirginia", "wisconsin"]
  },  
  emailUpdate: {
    type: String
  },
  bioUpdate: {
    type: String
  },
  removeUpdate: {
    type: String
  },
  addUpdate: {
    type: String
  },
  professionUpdate: [String]
});

const Update = mongoose.model("Update", updateSchema);

module.exports = Update;