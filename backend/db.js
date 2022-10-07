const mongoose = require("mongoose");
const mongoURI =
  "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

function connectToMongo() {
  mongoose.connect(mongoURI, () => {
    console.log("Connection established to mongoDB");
  });
}

module.exports = connectToMongo;
