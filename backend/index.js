const express = require("express");
const dotnev = require('dotenv');
const Twitter = require('./twitter');
const Language = require('./gcloud');

dotnev.config();

const app = express();

const twitter = new Twitter();

const language = new Language();

app.get('/', (req, res) => {
    res.send("Hello world!");
});

app.get('/api/analyze/:keyword', (req, res) => {
    const documents = [];
    keyword = req.params.keyword;
    twitter.getMultipleTweets(keyword, documents, 0, 1).then(result => {
        const promises = [];

        result.forEach(element => {
            promises.push(language.getSentiment(element));
            //entity sentiment analysis diabled for low accuracy
            // promises.push(language.getEntitySentiment(element));
        });
        Promise.all(promises)
            .then(result => {
                let totalScore = 0;
                let totalMagnitude = 0;

                result = result.filter(item => item);
                result.sort((a, b) => b.score - a.score);

                for (let i = 0; i < result.length; i++) {
                    totalScore += Number(result[i].score);
                    totalMagnitude += Number(result[i].magnitude);
                }
                res.json({
                    tweetCount: result.length,
                    score: (totalScore / result.length).toFixed(2),
                    magnitude: (totalMagnitude / result.length).toFixed(2),
                    posHighlights: result.slice(0, 5),
                    negHighlights: result.slice(result.length - 5).reverse(),
                    totalTweets: result
                });
            });
    });
});




const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Listening port ${PORT}`);
});