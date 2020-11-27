const express = require('express');
const cors = require('cors');
const { generateQuote, getAllQuotes } = require('.');

const app = express();

app.use(cors());

app.get('/quote', (_req, res) => {
  res.json(generateQuote());
});

app.get('/quotes', (_req, res) => {
  res.json(getAllQuotes());
});

module.exports = app;
