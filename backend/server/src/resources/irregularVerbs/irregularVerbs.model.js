const mongoose = require("mongoose");

const irregularVerbsSchema = new mongoose.Schema(
  {
    present: {
      type: String,
      required: true,
    },
    past: {
      type: String,
      required: true,
    },
    meaning: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const IrregularVerbs = mongoose.model("IrregularVerbs", irregularVerbsSchema);

module.exports = IrregularVerbs;
