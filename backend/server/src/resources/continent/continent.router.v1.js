var express = require("express");
const { catchErrors, LearningApiError } = require("../../errors");
const Continent = require("./continent.service");
var app = express();
var router = express.Router();

const getContinentData = (req, res) => {
  const { continent } = req.params;

  res.status(200).json({ message: `GET ${continent} continent data ` });
};

const getAllContinent = (req, res) => {
  res.status(200).json({ message: `GET all continent data` });
};
const addContinent = (req, res) => {
  const { continent } = req.params;

  const p = Continent.createContinent({ name: continent });
  res.status(200).json(p);
};

router.get("/", catchErrors(getAllContinent));
router.get("/:continent", catchErrors(getContinentData));
router.post("/:continent", catchErrors(addContinent));

module.exports = router;
