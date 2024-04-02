var configJS = require('./config.js');
var conf = new configJS
// var Bot = require('./bot.js');
// var Twitter = new Bot(configJS)
// Twitter.api('https://dev.twitter.com/docs/api/1/post/statuses/update.json')


const { TwitterApi } = require("twitter-api-v2");
const client = new TwitterApi({
    appKey: conf.appKey,
    appSecret: conf.appSecret,
    accessToken: conf.accessToken,
    accessSecret: conf.accessSecret,
    bearerToken:conf.bearerToken,
});
const rwClient = client.readWrite;
const textTweet = async () => {
    try {
      await rwClient.v2.tweet("This tweet has been created using nodejs");
      console.log("success");
    } catch (error) {
      console.error(error);
    }
};
textTweet()