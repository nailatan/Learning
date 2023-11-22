//express.urlencoded;
var cors = require("cors");
const morgan = require("morgan");
const express = require("express");
const { errorHandler } = require("./errors");
const db = require("./db");

const app = express();
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.disable("x-powered-by");

app.get("/", function (req, res) {
  res.send("Hello World");
});

require("./resources/continent/continent.controller").addRulesTo(app);

app.use(errorHandler);

const startServer = async () => {
  await db.connect();
  app.listen(8080, () => {
    //const mode = config.NODE_ENV.toUpperCase();
    // console.log(
    //   `Trips Management API Server (mode ${mode}) listening on port :${config.SERVER_PORT}`
    // );
    console.log("Larning API listening on port 8080");
  });
};

startServer();
