const mongoose = require("mongoose");

const continentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
  },
  { timestamps: true }
);

const Continent = mongoose.model("Continent", continentSchema);

module.exports = Continent;
