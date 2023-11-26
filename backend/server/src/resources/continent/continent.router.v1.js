var express = require("express");
const { catchErrors, LearningApiError } = require("../../errors");
const Continent = require("./continent.service");
var app = express();
var router = express.Router();

const getContinentData = async (req, res) => {
  const { continent } = req.params;
  const continentDb = await Continent.findOne(continent);
  if (continentDb === null) {
    throw new LearningApiError("400", "Not found");
  } else {
    res.status(200).json(continentDb);
  }
};

const getAllContinent = (req, res) => {
  res.status(200).json({ message: `GET all continent data` });
};

const addContinent = async (req, res) => {
  const { continent } = req.params;
  const { country } = req.body;
  let continent1 = {};
  let continentCreated = {};

  const continentDb = await Continent.findOne(continent);

  if (continentDb) {
    const countrydb = [...continentDb.country];
    countrydb.push(...country);

    continentCreated = await Continent.update(continent, countrydb);
  } else {
    continentCreated = await Continent.create({
      name: continent,
      country: country,
    });
  }
  res.status(200).json(continentCreated);
};

const updateContinent = async (req, res) => {
  const { continent } = req.params;
  const { country } = req.body;
  let continentCreated = {};

  const continentDb = await Continent.findOne(continent);

  if (continentDb) {
    const countrydb = [...continentDb.country];
    countrydb.push(...country);

    continentCreated = await Continent.update(continent, countrydb);
  } else {
    throw new LearningApiError("400", "Not found");
  }
  res.status(200).json(continentCreated);
};

const deleteContinent = async (req, res) => {
  const { continent } = req.params;

  const continentDeleted = await Continent.deleteOne(continent);
  if (continentDeleted === null) throw new LearningApiError("400", "Not found");
  res.status(200).json(continentDeleted);
};

router.get("/", catchErrors(getAllContinent));
router.get("/:continent", catchErrors(getContinentData));
router.post("/:continent", catchErrors(addContinent));
router.put("/:continent", catchErrors(updateContinent));
router.delete("/:continent", catchErrors(deleteContinent));

module.exports = router;
