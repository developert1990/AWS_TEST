const express = require('express');
const app = express();
const server = app.listen(7777);

app.get('/second-route', (req, res) => {
    res.send('second route fine');
});

app.get('/third-route', (req, res) => {
    res.send('second route fine');
});

app.get('/fourth-route', (req, res) => {
    res.send('second route fine');
});

app.get('/fifth-route', (req, res) => {
    res.send('second route fine');
});

module.exports = {
    server,
}
