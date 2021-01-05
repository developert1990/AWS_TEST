const express = require('express');
const app = express();
const server = app.listen(7777);

app.get('/', (req, res) => {
    res.send('API working fine');
});

app.get('/second-route', (req, res) => {
    res.send('second route fine');
});

app.get('/third-route', (req, res) => {
    res.send('second route fine');
});

module.exports = {
    server,
}
