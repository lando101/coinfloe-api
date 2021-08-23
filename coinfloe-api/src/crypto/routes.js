const express = require('express');
const fetch = require('node-fetch');
const CoinMarketCap = require('coinmarketcap-api');

const api_key_cm = '81a77fb7-e45a-4a67-8bca-71b18665401b';
const crypto_api_key = "641209cc5125f295360f388673546b58ea5e5a6d26846d4b05bd03d61ef8e4f2";
const client = new CoinMarketCap(api_key_cm);

const routes = express.Router({
    mergeParams: true
});




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
    let url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD&api_key=${crypto_api_key}`;
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

/**
 * @swagger
 * /crypto/info/{symbol}:
 *   get:
 *     description: Get top 100
 *     tags:
 *      - Coin Market Cap
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
routes.get('/info/:symbol', (req, res) => {
    let symbol = req.params.symbol.toString();
    // client.getQuotes({symbol: 'BTC,ETH'}).then(console.log).catch(console.error)
    client.getMetadata({ symbol: symbol }).then(data => { res.send({data})}).catch(console.error);
});

/**
 * @swagger
 * /crypto/info/quotes/latest/{fiat}:
 *   get:
 *     description: Get top 100
 *     tags:
 *      - Coin Market Cap
 *     responses:
 *       200:
 *         description: Success
*     parameters:
 *     - name: fiat
 *       description: get specific crypto by symbol
 *       in: path
 *       required: true
 *       type: string
 */
 routes.get('/info/quotes/latest/:fiat', (req, res) => {
    let symbol = req.params.fiat.toString();
    // client.getQuotes({symbol: 'BTC,ETH'}).then(console.log).catch(console.error)
    // client.getMetadata({ symbol: symbol }).then(data => { res.send({data})}).catch(console.error);
    client.getGlobal({convert: symbol}).then(data => { res.send({data})}).catch(console.error)
    // client.getMetadata('USD').then(data => { res.send({data})}).catch(console.error);
});


/**
 * @swagger
 * /crypto/info/{symbol}:
 *   get:
 *     description: Get top 100
 *     tags:
 *      - Coin Market Cap
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
routes.get('/info/:symbol', (req, res) => {
    let symbol = req.params.symbol.toString();
    client.getQuotes({symbol: 'BTC,ETH'}).then(console.log).catch(console.error)
    client.getMetadata({ symbol: symbol }).then(data => { res.send({data})}).catch(console.error);
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