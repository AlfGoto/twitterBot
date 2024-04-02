var configJS = require('./config.js');
var conf = new configJS


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
      await rwClient.v2.tweet({text:"C'est quand même plus simple de tweeter sur mon tel que via node.js mais bon"});
      console.log("success");
    } catch (error) {
      console.error(error);
    }
};
textTweet()