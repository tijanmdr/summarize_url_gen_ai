const express = require('express');
const app = express();
const {GoogleGenerativeAI} = require('@google/generative-ai');
const {config} = require("dotenv");

// to import .env variables
require('dotenv').config();

// use this route to make sure the api is working fine
app.get('/check', (req, res) => {
    return res.json({message: 'working'});
});

// API route to summarize URL
// URL should be http://localhost:3000/summarize_url?url=https://example_link.com
app.get('/summarize_url', async (req, res) => {
    if (req.query?.url) {
        const prompt = `As a news website, summarize me this link with only 250 lines and one paragraph only: ${req.query.url}`;


        const genAI = new GoogleGenerativeAI(process.env.API_KEY);
        const model = genAI.getGenerativeModel({model: 'gemini-pro'});

        const result = await model.generateContent(prompt);
        const response = await result.response;
        return res.json({'result': response.text()});
    } else
        return res.json({message: 'Query Paramater not found'});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});