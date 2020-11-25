const { main } = require('../lib/index');

describe('Service Test', () => {
  test('main function returns message', () => {
    expect(main()).toEqual('Hello world!');
  });
});
