var configJS = require('./config.js');
var conf = new configJS


const { TwitterApi } = require("twitter-api-v2");
const client = new TwitterApi({
    appKey: conf.appKey,
    appSecret: conf.appSecret,
    accessToken: conf.accessToken,
    accessSecret: conf.accessSecret,
    bearerToken: conf.bearerToken,
});
const rwClient = client.readWrite;



const textTweet = async (arg) => {
    try {
        await rwClient.v2.tweet({ text: arg });
    } catch (error) { console.error(error); }
};
textTweet('salut Marco lpb')



// let response = await rwClient.v2.tweets.