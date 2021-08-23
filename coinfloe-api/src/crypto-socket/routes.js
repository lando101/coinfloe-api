const express = require('express');
const fetch = require('node-fetch');
const app = express();
const expressWs = require('express-ws')(app);
var WebSocket = require('ws')
const routes = express.Router({
    mergeParams: true
});

const crypto_api_key = "641209cc5125f295360f388673546b58ea5e5a6d26846d4b05bd03d61ef8e4f2";

/**
 * @swagger
 * /crypto-socket/feed:
 *   get:
 *     description: Live ticker updates for cryptos
 *     tags:
 *     - Crypto Live Websocket
 *     responses:
 *       200:
 *         description: Success
 */

routes.get('/feed', (ws, req) => {
    console.log('TESTING');
    var ccStreamer = new WebSocket('wss://streamer.cryptocompare.com/v2?api_key=' + crypto_api_key);

    ccStreamer.onopen = function onStreamOpen() {
        var subRequest = {
            "action": "SubAdd",
            "subs": ["0~Coinbase~BTC~USD"]
        };
        ccStreamer.send(JSON.stringify(subRequest));
    }
    
    ccStreamer.onmessage = function onStreamMessage(message) {
        var message = message.data;
        console.log("Received from Cryptocompare: " + message);
    }
});

module.exports = {
    routes
}