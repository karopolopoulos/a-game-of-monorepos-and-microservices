const { randomNumberGenerator } = require('../lib/index');

describe('randomNumberGenerator()', () => {
  test('should return between 0 and 1 if no limit is given', () => {
    expect(randomNumberGenerator()).toBeLessThanOrEqual(1);
  });

  test('should return between 0 and limit', () => {
    const limit = 100;
    expect(randomNumberGenerator(limit)).toBeLessThanOrEqual(limit);
  });
});
