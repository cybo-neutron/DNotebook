const express = require("express");
const connectToMongo = require("./db");

const port = 13172;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

connectToMongo();
