const express = require("express");
const app = express();

const everything = require('./text/everything.json');

app.get("/encrypted", (req, res) => {
  res.json(everything.encrypted);
});

app.get("/unencrypted", (req, res) => {
  res.json(everything.unencrypted);
});

app.get("/tos", (req, res) => {
  res.json(everything.tos);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});