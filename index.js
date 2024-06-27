const express = require('express');
const app = express();

app.get('/check', (req, res) => {
    return res.json({message: 'working'});
});