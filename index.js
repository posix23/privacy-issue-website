const express = require("express");
const app = express();

const encrypted = require('text/encrypted.txt');
const unencrypted = require('text/unencrypted.txt');
const tos = require('text/tos.txt');

app.get("/encrypted", (req, res) => {
  res.send(encrypted);
});

app.get("/unencrypted", (req, res) => {
  res.send(unencrypted);
});

app.get("/tos", (req, res) => {
  res.send(tos);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});