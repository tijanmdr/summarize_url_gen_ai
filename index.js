const express = require('express');
const app = express();

// to import .env variables
require('dotenv').config();

// use this route to make sure the api is working fine
app.get('/check', (req, res) => {
    return res.json({message: 'working'});
});

// API route to summarize URL
// URL should be http://localhost:3000/summarize_url?url=https://example_link.com
app.get('/summarize_url', async (req, res) => {
    if (req.query?.url)
        return res.json(req.query.url);
    else
        return res.json({message: 'Query Paramater not found'});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});