const express = require('express');
const app = express();

app.get('/check', (req, res) => {
    return res.json({message: 'working'});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});