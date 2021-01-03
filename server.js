// This brings in the express server side framework
const express = require("express");

const cors = require("cors");

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello practice app v2!");
});

app.listen(port, () => {
  console.log(`Running on port ${port} - ${Date.now()}`);
});
