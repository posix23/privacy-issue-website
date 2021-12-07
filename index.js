const express = require("express");
const app = express();
const cors = require('cors');

const everything = require('./text/everything.json');

app.get("/encrypted", cors(), (req, res) => {
  res.json({ "encrypted": everything.encrypted });
});

app.get("/unencrypted", cors(), (req, res) => {
  res.json({ "unecnrypted": everything.unencrypted });
});

app.get("/tos", cors(), (req, res) => {
  res.json({ "tos": everything.tos });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});