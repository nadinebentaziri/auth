const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const carsSchema = new Schema({
  matricule: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  typeV: {
    type: String,
    required: true,
  },
  nomv: {
    type: String,
    required: true,
  },
  prenomv: {
    type: String,
    required: true,
  },
  adressev: {
    type: String,
    required: true,
  },
  codepostalv: {
    type: Number,
    required: true,
  },
  villev: {
    type: String,
    required: true,
  },
  telv: {
    type: Number,
    required: true,
  },
  emailv: {
    type: String,
    required: true,
  },
  
  imagev: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Car", carsSchema);

