const mongoose = require("mongoose");
const mongoURI = process.env.MONGO_URI;

function connectToMongo() {
  mongoose.connect(mongoURI, (err) => {
    if (err) {
      console.log("Problem in connection with the database");
      console.log(err);
    } else {
      console.log("Connection established to mongoDB");
    }
  });
}

module.exports = connectToMongo;
