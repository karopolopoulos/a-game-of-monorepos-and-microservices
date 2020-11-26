const request = require('supertest');
const app = require('../lib/app');

describe('Quotes Service Test', () => {
  test('The GET /quote endpoint should respond with a random quote', async () => {
    const response = await request(app).get('/quote');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      quote: expect.any(String),
      character: expect.any(String),
    });
  });
});
