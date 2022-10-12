require("dotenv").config();
const express = require("express");
const connectToMongo = require("./db");

const port = 13712;
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

//Available routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

connectToMongo();
