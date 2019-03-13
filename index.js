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
    //filter out retweets
    const keyword = req.params.keyword + ' -filter:retweets';
    twitter.getMultipleTweets(keyword, documents, 0, 1).then(result => {
        const promises = [];

        result.forEach(element => {
            promises.push(language.getSentiment(element));
            // promises.push(language.getEntitySentiment(element));
        });
        Promise.all(promises)
            .then(result => {
                const posHighlights = [];
                const negHighlights = [];
                const topPosScores = [0, 0, 0];
                const topNegScores = [0, 0, 0];
                let totalScore = 0;
                let totalMagnitude = 0;
                let count = 0;
                let index = 0;

                while (index < result.length) {
                    const element = result[index];
                    if (element) {
                        if (element.score !== 0 && element.magnitude !== 0) {
                            if (element.score > 0){
                                const topScoreIndex = topPosScores.findIndex(score => {return score < element.score;});
                                if (topScoreIndex !== -1) {
                                    topPosScores[topScoreIndex] = element.score;
                                    posHighlights[topScoreIndex] = element;
                                }
                            } else {
                                const topScoreIndex = topNegScores.findIndex(score => {return score > element.score;});
                                if (topScoreIndex !== -1) {
                                    topNegScores[topScoreIndex] = element.score;
                                    negHighlights[topScoreIndex] = element;
                                }
                            }
                            // add sentiment score and magnitude to total
                            totalScore += element.score;
                            totalMagnitude += element.magnitude;
                            count++;
                            index++;
                        } else {
                            result.splice(index, 1);
                        }
                    } else {
                        result.splice(index, 1);
                    }
                }
                res.json({
                    tweetCount: count,
                    score: totalScore / count,
                    magnitude: totalMagnitude / count,
                    posHighlights,
                    negHighlights,
                    totalTweets: result
                });
            });
    });
});




const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Listening port ${PORT}`);
});