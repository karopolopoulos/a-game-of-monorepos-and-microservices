import { main } from './index';

describe('Service Test', () => {
  test('main function returns message', () => {
    expect(main()).toEqual('Hello world!');
  });
});
