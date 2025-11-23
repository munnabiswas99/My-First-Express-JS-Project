const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express()
const port = 3000;

app.get('/', (req, res) => {
    res.send('This is my first express server.');
})

app.get('/data', (req, res) => {
    res.send('My name is Munna Biswas');
})

app.listen(port, () => {
    console.log(`My server listening on port ${port}`);
})