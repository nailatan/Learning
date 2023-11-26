const Continent = require("./continent.model");

const create = async (continent) => {
  return await Continent.create(continent);
};

const update = async (name, country) => {
  return await Continent.findOneAndUpdate({ name }, { country }, { new: true });
};

const findOne = async (continent) => {
  console.log(
    "🚀 ~ file: continent.service.js:12 ~ findOne ~ continent:",
    continent
  );
  const continentDb = await Continent.findOne({ name: continent }).exec();
  return continentDb;
};

const deleteOne = async (name) => {
  const continentDb = await Continent.findOneAndDelete({ name }).lean().exec();
  return continentDb;
};

module.exports = { create, findOne, update, deleteOne };
