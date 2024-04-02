class Bot {
    constructor(conf) {
        this.conf = new conf
    }
    api(arg) {
        // fetch(arg, {
        //     // method: 'GET',
        //     headers: {
        //         authorization: 'OAuth',
        //         oauth_consumer_key: this.conf.consumer_key,
        //         oauth_nonce: "generated_oauth_nonce",
        //         oauth_signature: "generated_oauth_signature",
        //         oauth_signature_method: "HMAC-SHA1",
        //         oauth_timestamp: "generated_timestamp",
        //         oauth_token: "oauth_token",
        //         oauth_version: "1.0"

        //     },
        // }).then(e => { console.log(e) })
        fetch(arg, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + this.conf.bearer_token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                status: "Incroyable de tweet"
            })
        }).then(e => { console.log(e) })
    }

}
module.exports = Bot

// authorization: OAuth
//   oauth_consumer_key="oauth_customer_key",
//   oauth_nonce="generated_oauth_nonce",
//   oauth_signature="generated_oauth_signature",
//   oauth_signature_method="HMAC-SHA1",
//   oauth_timestamp="generated_timestamp",
//   oauth_token="oauth_token",
//   oauth_version="1.0"