const request = require('supertest');
const app = require('../app');

test('root endpoint', async () => {
  const res = await request(app).get('/');
  expect(res.statusCode).toBe(200);
});

test('addition endpoint', async () => {
  const res = await request(app).get('/add?a=2&b=3');
  expect(res.body.result).toBe(5);
});
