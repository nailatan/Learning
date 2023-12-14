require("dotenv").config();

const envVariablesName = [
  "NODE_ENV",
  "DB_USER",
  "DB_PWD",
  "DB_HOST",
  "DB_PORT",
  "DB_DATABASE",
  "SERVER_PORT",
  "FRONTEND_STATIC",
];

let envVariables = {};

envVariablesName.forEach((varName) => {
  if (process.env[varName] === undefined) {
    throw new Error(`Missing environment variable ${varName}`);
  }
  envVariables[varName] = process.env[varName];
});

const getMongoURL = () => {
  const { DB_HOST, DB_PORT, DB_USER, DB_PWD, DB_DATABASE } = envVariables;
  return `mongodb://${DB_USER}:${DB_PWD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}?authSource=admin`;
  //   `mongodb://admin:1234@localhost:27017/Learning?authSource=admin`
};

module.exports = {
  ...envVariables,
  isEnvelopment: process.env.NODE_ENV === "Development",
  MONGO_URL: getMongoURL(),
};
