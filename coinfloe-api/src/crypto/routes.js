const express = require('express');
const fetch = require('node-fetch');
var ccxt = require('ccxt');
const ccxws = require("ccxws");
const kraken = new ccxws.kraken();
const publicKey = '870e32b5723764a8f9c470f7a2c27ce118fde8d43477cdc618d67d803707fa84';   // e.g. 12326758a39a720e15d064cab3c1f0a9332d107de453bd41926bb3acd565059e
const privateKey = 'e4d2bd8098e82609e84e5b8d44572dee8768a4aad1001ea5ac2d5062687578a1133b4fd92f64cf110e3a1975d442f55f8f93fd8d03594ff1e32ba8d07f05bb95'; // e.g. 6991cf4c9b518293429db0df6085d1731074bed8abccd7f0279a52fac5b0c1a8a2f6d28e11a50fbb1c6575d1407e637f9ad7c73fbddfa87c5d418fd58971f829
const Shrimpy = require('shrimpy-node');
const privateClient = new Shrimpy.ShrimpyApiClient(publicKey, privateKey);

let apiClient = null;
let wsClient = null;
let token = null;

console.log(ccxt.exchanges);


const routes = express.Router({
    mergeParams: true
});



const crypto_api_key = "641209cc5125f295360f388673546b58ea5e5a6d26846d4b05bd03d61ef8e4f2";


routes.get('/', (req, res) => {
    res.status(200).json({});
});

/**
 * @swagger
 * /crypto/global-metrics:
 *   get:
 *     description: Get global metrics
 *     tags:
 *      - Coin Gecko
 *     responses:
 *       200:
 *         description: Success
 */
routes.get('/global-metrics', (req, res) => {
    let url = `https://api.coingecko.com/api/v3/global`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            res.send({ data });
        });
});


/**
 * @swagger
 * /crypto/top-100-cryptos:
 *   get:
 *     description: Get top 100
 *     tags:
 *      - Crypto Compare
 *     responses:
 *       200:
 *         description: Success
 */
routes.get('/top-100-cryptos', (req, res) => {
    let url = `https://min-api.cryptocompare.com/data/top/totalvolfull?limit=100&tsym=USD&api_key=${crypto_api_key}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            res.send({ data });
        });
});

/**
 * @swagger
 * /crypto/blockchain/{symbol}:
 *   get:
 *     description: Get single crypto data
 *     tags:
 *     - Crypto Compare
 *     responses:
 *       200:
 *         description: Success
 *     parameters:
 *     - name: symbol
 *       description: get specific crypto by symbol
 *       in: path
 *       required: true
 *       type: string
 */

// get single crypto data
routes.get('/blockchain/:symbol', (req, res) => {
    console.log(req.params);
    let symbol = req.params.symbol.toString();


    let url = `https://min-api.cryptocompare.com/data/blockchain/latest?fsym=${symbol}&api_key=${crypto_api_key}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            res.send({ data });
        });
});

/**
 * @swagger
 * /crypto/daily_historical/{symbol}:
 *   get:
 *     description: Get daily historical data (30 days)
 *     tags:
 *     - Crypto Compare
 *     responses:
 *       200:
 *         description: Success
 *     parameters:
 *     - name: symbol
 *       description: get specific crypto historical data by symbol
 *       in: path
 *       required: true
 *       type: string
 */

// get single crypto daily data
routes.get('/daily_historical/:symbol', (req, res) => {
    console.log(req.params);
    let symbol = req.params.symbol.toString();


    let url = `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${symbol}&tsym=USD&limit=1825&api_key=${crypto_api_key}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            res.send({ data });
        });
});


/**
 * @swagger
 * /crypto/hourly_historical/{symbol}:
 *   get:
 *     description: Get hourly historical data (24 hours)
 *     tags:
 *     - Crypto Compare
 *     responses:
 *       200:
 *         description: Success
 *     parameters:
 *     - name: symbol
 *       description: get specific crypto historical data by symbol
 *       in: path
 *       required: true
 *       type: string
 */

// get single crypto hourly data
routes.get('/hourly_historical/:symbol', (req, res) => {
    console.log(req.params);
    let symbol = req.params.symbol.toString();


    let url = `https://min-api.cryptocompare.com/data/v2/histohour?fsym=${symbol}&tsym=USD&limit=720&api_key=${crypto_api_key}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            res.send({ data });
        });
});

/**
 * @swagger
 * /crypto/minute_historical/{symbol}:
 *   get:
 *     description: Get minute historical data (24 hours)
 *     tags:
 *     - Crypto Compare
 *     responses:
 *       200:
 *         description: Success
 *     parameters:
 *     - name: symbol
 *       description: get specific crypto historical data by symbol
 *       in: path
 *       required: true
 *       type: string
 */

// get single crypto hourly data
routes.get('/minute_historical/:symbol', (req, res) => {
    console.log(req.params);
    let symbol = req.params.symbol.toString();


    let url = `https://min-api.cryptocompare.com/data/v2/histominute?fsym=${symbol}&tsym=USD&limit=1440&api_key=${crypto_api_key}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            res.send({ data });
        });
});

/**
 * @swagger
 * /crypto/trading_signals/{symbol}:
 *   get:
 *     description: Get trading signals for crypto
 *     tags:
 *     - Crypto Compare
 *     responses:
 *       200:
 *         description: Success
 *     parameters:
 *     - name: symbol
 *       description: get specific crypto trading signals
 *       in: path
 *       required: true
 *       type: string
 */

// get single crypto daily data
routes.get('/trading_signals/:symbol', (req, res) => {
    console.log(req.params);
    let symbol = req.params.symbol.toString();


    let url = `https://min-api.cryptocompare.com/data/tradingsignals/intotheblock/latest?fsym=${symbol}&api_key=${crypto_api_key}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            res.send({ data });
        });
});

/**
 * @swagger
 * /crypto/news/{symbol}:
 *   get:
 *     description: Get recent news articles
 *     tags:
 *     - Crypto Compare
 *     responses:
 *       200:
 *         description: Success
 *     parameters:
 *     - name: symbol
 *       description: get specific crypto news
 *       in: path
 *       required: true
 *       type: string
 */

// get recent news
routes.get('/news/:symbol', (req, res) => {
    console.log(req.params.symbol.toString());
    let symbol = req.params.symbol.toString();

    let url = `https://min-api.cryptocompare.com/data/v2/news/?categories=${symbol}&excludeCategories=Sponsoredapi_key=${crypto_api_key}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            res.send({ data });
        });
});

/**
 * @swagger
 * /crypto/news:
 *   get:
 *     description: Get recent news articles
 *     tags:
 *     - Crypto Compare
 *     responses:
 *       200:
 *         description: Success
 */

// get popular news
routes.get('/news', (req, res) => {

    let url = `https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=${crypto_api_key}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            res.send({ data });
        });
});

/**
 * @swagger
 * /crypto/popular-news:
 *   get:
 *     description: Get popular news articles
 *     tags:
 *     - Crypto Compare
 *     responses:
 *       200:
 *         description: Success
 */

// get popular news
routes.get('/popular-news', (req, res) => {

    let url = `https://min-api.cryptocompare.com/data/v2/news/?sortOrder=popular&?lang=EN&api_key=${crypto_api_key}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            res.send({ data });
        });
});

module.exports = {
    routes
}

// privateClient
//     .getTicker('kucoin')
//     .then(data => {
//         // do something with the data
//         console.log(data);
//     })
//     .catch(error => {
//          // handle the error
//     });
// function handler(msg){
//     console.log(msg);
// };

// function subscribeWhenConnected(oData){

//     if (wsClient.getReadyState() === 1) {
//         console.log("Subcribing to the order book for ETH-BTC");
//         wsClient.subscribe(oData, handler);
//     } else {
//         console.log("waiting for ws connection...");
//         setTimeout(subscribeWhenConnected.bind(null, oData), 1000);
//     }

// };

// function unsubscribe(oData){
//     console.log("Unsubcribing now");
//     wsClient.unsubscribe(oData);
//     console.log("Stopping the application");
//     process.exit(1);
// };

// (async () => {

//     apiClient = new Shrimpy.ShrimpyApiClient(publicKey, privateKey);
//     token = await apiClient.getToken();
//     wsClient = new Shrimpy.ShrimpyWsClient(function (error) {
//         console.error(error);
//     }, token);

//     wsClient.connect();
//     subscribeWhenConnected({
//         "type": "subscribe",
//         "pair": "ETH-BTC",
//         "exchange": "coinbasepro",
//         "channel": "orderbook"
//     });

//     setTimeout(unsubscribe.bind(null, {
//         "type": "unsubscribe",
//         "pair": "ETH-BTC",
//         "exchange": "coinbasepro",
//         "channel": "orderbook"
//     }), 10000);

// })();