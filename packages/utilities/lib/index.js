const randomNumberGenerator = (limit) => {
  if (!limit) return Math.random();

  return Math.floor(Math.random() * limit);
};

module.exports = { randomNumberGenerator };
