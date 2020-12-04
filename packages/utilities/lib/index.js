const randomNumberGenerator = (limit) => {
  if (!limit) return Math.random();

  return Math.floor(Math.random() * limit);
};

const arrayToHash = (array) => {
  const hashObj = {};
  array.forEach((v) => {
    hashObj[v] = 1;
  });
  return hashObj;
};

module.exports = { randomNumberGenerator, arrayToHash };
