const express = require("express");
const app = express();
const twitter = require("twitter");
const dotnev = require('dotenv');

dotnev.config;

app.get('/', (req, res) => {
    res.send("Hello world!");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Listening port ${PORT}`);
});