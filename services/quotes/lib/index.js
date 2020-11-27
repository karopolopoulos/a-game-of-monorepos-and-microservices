const { randomNumberGenerator } = require('@monorepo/utilities');
const gameOfThronesQuotes = require('./resources/game-of-thrones-quotes.json');

const generateQuote = () => {
  const randNumber = randomNumberGenerator(gameOfThronesQuotes.length);

  return gameOfThronesQuotes[randNumber];
};

const getAllQuotes = () => {
  return gameOfThronesQuotes;
};

module.exports = { generateQuote, getAllQuotes };
