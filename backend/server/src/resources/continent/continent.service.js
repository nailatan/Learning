const Continent = require("./continent.model");

const createContinent = async (continent) => {
  const p = await Continent.create({ name: "prueba" });
  console.log("🚀 ~ file: continent.service.js:5 ~ createContinent ~ p:", p);

  return p;
};

module.exports = { createContinent };
