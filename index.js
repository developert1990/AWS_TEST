const express = require('express');
const app = express();
const server = app.listen(7777);

app.get('*', (req, res) => {
    res.send('API working fine');
});

app.get('*', (req, res) => {
    res.send('API working fine');
});
app.get('*', (req, res) => {
    res.send('API working fine');
});
app.get('*', (req, res) => {
    res.send('API working fine');
});
app.get('*', (req, res) => {
    res.send('API working fine');
});

module.exports = {
    server,
}