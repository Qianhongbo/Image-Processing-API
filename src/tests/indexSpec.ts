import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Test endpoint responses', () => {
  it('get the /api/images/filename=fjord&width=100&height=100', async () => {
    const response = await request.get(
      '/api/images?filename=fjord&width=100&height=100'
    );
    expect(response.status).toBe(200);
  });
});
