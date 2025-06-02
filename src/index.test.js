const request = require('supertest');
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello, MERN Blog!'));

test('should say Hello, MERN Blog!', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.text).toBe('Hello, MERN Blog!');
});
