# Twitter Sentiment Analysis
A simple sentiment analysis tool for Twitter. It searches a set of 100 tweets based on the keyword that is provided and performs a sentiment analysis to produce an average score and an average magnitude. Tweets with 0 score and 0 magnitude are omitted. The details on what 'score' and 'magnitude' mean are explained <a href="https://cloud.google.com/natural-language/docs/basics#interpreting_sentiment_analysis_values">here.</a> 

*Sentiment analysis is provided by Google Cloud NLP.

## Installation
```
npm install
```
- Create Twitter developer account and retrieve keys.
- Create Google Cloud project and enable Google NLP API.
- Download Auth key from the credential tab on Google Cloud Console.
- Create a .env file on root and fill it like below
```
# twitter keys
TWITTER_CONSUMER_KEY = YOUR_TWITTER_CONSUMER_KEY
TWITTER_CONSUMER_SECRET = YOUR_TWITTER_CONSUMER_SECRET_KEY
TWITTER_ACCESS_TOKEN_KEY = YOUR_TWITTER_ACCESS_TOKEN_KEY
TWITTER_ACCESS_TOKEN_SECRET = YOUR_TWITTER_ACCESS_TOKEN_SECRET_KEY

#gcloud auth
PROJECT_ID = YOUR_PROJECT_ID
KEYFILE_NAME = PATH/TO/YOUR/KEY.JSON
```
- Run locally using Nodemon
```
npm run dev
```
- OR deploy on Google Cloud (provided you have Google Cloud SDK installed on your device)
```
gcloud app deploy
```

## Usage example

If run locally,
```
GET localhost:8000/api/analyze/doge
```

returns in json 

```
{
    "tweetCount": 76,
    "score": 0.3236842133889073,
    "magnitude": 0.47105263506895617,
    "posHighlights": [
        {
            "keyword": "doge",
            "createdAt": "Wed Mar 13 07:00:02 +0000 2019",
            "favoriteCount": 0,
            "retweetCount": 0,
            "content": "The current price of one DOGE is now: 0.00205704$.One MDOGE is worth 2057.04$!Total volume in last 24H: 433938344.71508002",
            "id": "1105725185200668672",
            "type": "PLAIN_TEXT",
            "score": 0.8999999761581421,
            "magnitude": 0.8999999761581421
        },
        {
            "keyword": "doge",
            "createdAt": "Wed Mar 13 07:00:01 +0000 2019",
            "favoriteCount": 0,
            "retweetCount": 0,
            "content": "A bright view of a glimpse of Venice: come at Doge's Palace to visit \"Canaletto and Venice\", an exhibition of lights, shadows and views.#fourpointsvenice Ph: @ giuliopugliese ",
            "id": "1105725181845274625",
            "type": "PLAIN_TEXT",
            "score": 0.8999999761581421,
            "magnitude": 0.8999999761581421
        },
        {
            "keyword": "doge",
            "createdAt": "Wed Mar 13 06:45:01 +0000 2019",
            "favoriteCount": 0,
            "retweetCount": 1,
            "content": "The current price of one DOGE is now: 0.00204966$.One MDOGE is worth 2049.66$!Total volume in last 24H: 456483257.40033001",
            "id": "1105721409198874624",
            "type": "PLAIN_TEXT",
            "score": 0.8999999761581421,
            "magnitude": 0.8999999761581421
        }
    ],
    "negHighlights": [
        {
            "keyword": "doge",
            "createdAt": "Wed Mar 13 07:00:20 +0000 2019",
            "favoriteCount": 1,
            "retweetCount": 0,
            "content": "@RottingVale That fucking doge meme",
            "id": "1105725263025975296",
            "type": "PLAIN_TEXT",
            "score": -0.30000001192092896,
            "magnitude": 0.30000001192092896
        },
        {
            "keyword": "doge",
            "createdAt": "Wed Mar 13 06:24:40 +0000 2019",
            "favoriteCount": 0,
            "retweetCount": 0,
            "content": "@Doge_Bigs still need?",
            "id": "1105716287714611201",
            "type": "PLAIN_TEXT",
            "score": -0.10000000149011612,
            "magnitude": 0.10000000149011612
        },
        {
            "keyword": "doge",
            "createdAt": "Wed Mar 13 06:13:29 +0000 2019",
            "favoriteCount": 0,
            "retweetCount": 0,
            "content": "September Results: 2200% Profits!🔥🔥For info, Join Telegram-  $POWR $UTT $BTC $ONT $EOS $ADA $NEO $XRP $ENJ $FCT $BTC $DCR $GBYTE $DOGE $GBC $BCH $HOT $BLZ $BTC $OCN $CLOAK $TOMO $NCASH $ENG 923812654 ",
            "id": "1105713472136990720",
            "type": "PLAIN_TEXT",
            "score": -0.10000000149011612,
            "magnitude": 0.10000000149011612
        }
    ],
    "totalTweets": [
        {
            "keyword": "doge",
            "createdAt": "Tue Mar 05 03:29:37 +0000 2019",
            "favoriteCount": 2647,
            "retweetCount": 148,
            "content": "I found a broken dogé! 🤣 ",
            "id": "1102773128772702210",
            "type": "PLAIN_TEXT",
            "score": -0.20000000298023224,
            "magnitude": 0.699999988079071
        },
        {
            "keyword": "doge",
            "createdAt": "Wed Mar 13 07:07:48 +0000 2019",
            "favoriteCount": 0,
            "retweetCount": 0,
            "content": "13.03.19 10:051 btc: 3908.08510245 +0.711 doge: 0.002036505 +3.041 etc: 133.089477558 +0.73",
            "id": "1105727139444375552",
            "type": "PLAIN_TEXT",
            "score": 0.5,
            "magnitude": 0.5
        },
        {
            "keyword": "doge",
            "createdAt": "Wed Mar 13 07:03:28 +0000 2019",
            "favoriteCount": 0,
            "retweetCount": 18,
            "content": "Doge Ram.. ",
            "id": "1105726052062687233",
            "type": "PLAIN_TEXT",
            "score": 0.20000000298023224,
            "magnitude": 0.20000000298023224
        },
        {
            "keyword": "doge",
            "createdAt": "Wed Mar 13 07:02:32 +0000 2019",
            "favoriteCount": 0,
            "retweetCount": 253,
            "content": "This must be how it feels like to play Mario Kart against The Avengers. ",
            "id": "1105725817114583041",
            "type": "PLAIN_TEXT",
            "score": 0.10000000149011612,
            "magnitude": 0.10000000149011612
        },
        {
            "keyword": "doge",
            "createdAt": "Wed Mar 13 07:01:43 +0000 2019",
            "favoriteCount": 0,
            "retweetCount": 0,
            "content": "$IDOL(BTC)Price: 1satVolume: 0.0 BTC$IDOL(DOGE)Price: 0.00047 DOGE(0.02447sat)Volume: 282024 DOGE(0.147 BTC)$BTC(JPY)￥428779",
            "id": "1105725610289258496",
            "type": "PLAIN_TEXT",
            "score": 0.30000001192092896,
            "magnitude": 0.30000001192092896
        },
        ...]
}
```
