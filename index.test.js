const request = require('supertest');
const { server } = require('./index');
describe('testing api', () => {
    afterAll(() => {
        server.close();
    });

    it('testing all routes', async done => {
        const response = await request(server).get('/');

        expect(response.statusCode).toBe(200);
        done();
    });
});
