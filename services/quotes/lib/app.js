const express = require('express');
const cors = require('cors');
const { generateQuote } = require('.');

const app = express();

app.use(cors());

app.get('/quote', (_req, res) => {
  generateQuote();
  res.json(generateQuote());
});

module.exports = app;
