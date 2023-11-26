const mongoose = require("mongoose");

const continentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    country: [{ name: String, capital: String }],
  },
  { timestamps: true }
);

const Continent = mongoose.model("Continent", continentSchema);

module.exports = Continent;
