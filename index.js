const express = require('express');
const app = express();
const server = app.listen(5000);

app.get('*', (req, res) => {
    res.send('API working');
});

module.exports = {
    server,
}