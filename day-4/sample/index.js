const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/now", (req, res) => {
  const now = new Date();
  res.send(now);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
