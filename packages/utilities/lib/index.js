const randomNumberGenerator = (limit) => {
  if (!limit) return Math.random();

  return Math.floor(Math.random() * limit);
};

const arrayToHash = (array) => {
  const hash = {};
  array.forEach((v) => {
    hash[v] = 1;
  });
  return hash;
};

module.exports = { randomNumberGenerator, arrayToHash };
