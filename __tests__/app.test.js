const request = require('supertest');
const app = require('../lib/app');

describe('app', () => {
  it('returns plain text "hi" on home path with GET method', async() => {
    const response = await request(app)
      .get('/');

    expect(response.text)
      .toEqual('Hi');
  });

  it('responds with status code 200 and plain text with the request body @ /echo w/ POST', async() => {
    const response = await request(app)
      .post('/echo')
      .send('Hi');

    expect(response.text)
      .toEqual('Hi');
  });

  it('responds with html with an h1 and the word red @/red using GET method', async() => {
    const response = await request(app)
      .get('/red');

    expect(response.text)
      .toEqual('<html><body><h1>red</h1></body></html>');
  });

  it('responds with html with an h1 and the word green @/green using GET method', async() => {
    const response = await request(app)
      .get('/green');

    expect(response.text)
      .toEqual('<html><body><h1>green</h1></body></html>');
  });

  it('responds with html with an h1 and the word blue @/blue using GET method', async() => {
    const response = await request(app)
      .get('/blue');

    expect(response.text)
      .toEqual('<html><body><h1>blue</h1></body></html>');
  });

  it('responds with 404 when you do something else', async() => {
    const response = await request(app)
      .post('/blue');

    expect(response.status)
      .toEqual(404);
  });
});
