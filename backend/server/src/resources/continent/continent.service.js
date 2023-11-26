const Continent = require("./continent.model");

const create = async (continent) => {
  return await Continent.create(continent);
};

const update = async (name, country) => {
  return await Continent.findOneAndUpdate({ name }, { country }, { new: true });
};

const find = async (continent) => {
  const continentDb = await Continent.find().exec();
  return continentDb;
};

const findOne = async (continent) => {
  const continentDb = await Continent.findOne({ name: continent }).exec();
  return continentDb;
};

const deleteOne = async (name) => {
  const continentDb = await Continent.findOneAndDelete({ name }).lean().exec();
  return continentDb;
};

module.exports = { create, find, findOne, update, deleteOne };
