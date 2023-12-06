var express = require("express");
const { catchErrors, LearningApiError } = require("../../errors");
const Verbs = require("./irregularVerbs.service");
var app = express();
var router = express.Router();

const getVerbs = async (req, res) => {
  const { _id } = req.params;
  const verbFound = await Verbs.findOne(_id);
  if (verbFound === null) {
    throw new LearningApiError("400", "Not found");
  } else {
    res.status(200).json(verbFound);
  }
};

const getAllVerbs = async (req, res) => {
  const result = await Verbs.find();
  res.status(200).json(result);
};

const addVerbs = async (req, res) => {
  const verbToAdd = req.body;

  verbAdded = await Verbs.create(verbToAdd);
  res.status(200).json(verbAdded);
};

const updateVerbs = async (req, res) => {
  const { _id } = req.params;
  const { present, past, meaning } = req.body;

  const verdUpdated = await Verbs.update({ _id, present, past, meaning });

  res.status(200).json(verdUpdated);
};

const deleteVerbs = async (req, res) => {
  const { _id } = req.params;
  const verbDeleted = await Verbs.deleteOne(_id);
  if (verbDeleted === null) throw new LearningApiError("400", "Not found");
  res.status(200).json(verbDeleted);
};

router.get("/", catchErrors(getAllVerbs));
router.post("/", catchErrors(addVerbs));
router.get("/:_id", catchErrors(getVerbs));
router.put("/:_id", catchErrors(updateVerbs));
router.delete("/:_id", catchErrors(deleteVerbs));

module.exports = router;
