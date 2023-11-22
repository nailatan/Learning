const mongoose = require("mongoose");
//const config = require("./config");

const connect = async () => {
  try {
    await mongoose.connect(
      `mongodb://admin:1234@localhost:27017/Learning?authSource=admin`
    );
    console.log("Mongoose connected");
  } catch (e) {
    console.error(`Could not connect to MongoDB: ${e}`);
  }
};

const conn = mongoose.connection;

const disconnect = async () => {
  return mongoose.connection.close();
};

module.exports = {
  connect,
  disconnect,
  conn,
};
