const addRulesTo = (app) => {
  app.use("/api/v1/verbs/", require("./irregularVerbs.router.v1"));
};

module.exports = { addRulesTo };
