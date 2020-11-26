const express = require('express');
const { generateQuote } = require('.');

const app = express();

app.get('/quote', (_req, res) => {
  generateQuote();
  res.json(generateQuote());
});

module.exports = app;
