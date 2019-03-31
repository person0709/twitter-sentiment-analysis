const Twit = require('twit');

class Twitter {
    constructor() {
        this.T = new Twit({
            consumer_key: process.env.TWITTER_CONSUMER_KEY,
            consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
            access_token: process.env.TWITTER_ACCESS_TOKEN_KEY,
            access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
        });

        this.params = {
            lang: 'en',
            count: 100,
            result_type: 'mixed',
            tweet_mode: 'extended',
        };
    }

    getTweet(keyword, previousMaxId, count) {
        if (previousMaxId != 0) this.params.max_id = previousMaxId;
        this.params.q = keyword;

        const promise = () => new Promise(resolve => {
            this.T.get('search/tweets', this.params, (err, data) => {
                if (!err) {
                    const totalTweets = [];
                    const tweets = data.statuses;

                    for (let i = 0; i < tweets.length; i++) {
                        let text;
                        if (tweets[i].retweeted_status) {
                            text = tweets[i].retweeted_status.full_text;
                        } else {
                            text = tweets[i].full_text;
                        }
                        //strip url from text
                        text = text.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '');
                        //strip newline from text
                        text = text.replace(/\r?\n|\r/g, '');
                        //replace &amp; with and
                        text = text.replace('&amp;', 'and');

                        const document = {
                            "keyword": keyword,
                            "createdAt": tweets[i].created_at,
                            "favoriteCount": tweets[i].favorite_count,
                            "retweetCount": tweets[i].retweet_count,
                            "content": text,
                            "id": tweets[i].id_str,
                            "type": 'PLAIN_TEXT'
                        };

                        totalTweets.push(document);
                    }

                    resolve({
                        "totalTweets": totalTweets,
                        "previousMaxId": tweets[tweets.length - 1].id,
                    });
                } else {
                    console.log(err);
                }
            });
        });
        return promise;
    }

    async getMultipleTweets(keyword, documents, previousMaxId, count) {
        const results = await new Promise(async (resolve) => {
            if (count == 0) {
                resolve(false);
                return;
            }
            const promise = this.getTweet(keyword, previousMaxId, count);
            await promise().then(result => {
                resolve(result);
            });
        });
        if (!results) {
            return documents;
        }
        documents = documents.concat(results.totalTweets);
        return this.getMultipleTweets(keyword, documents, results.previousMaxId, count - 1);
    }
}

module.exports = Twitter;