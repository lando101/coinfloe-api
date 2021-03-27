const express = require('express');
const fetch = require('node-fetch');

const routes = express.Router({
    mergeParams: true
});

const crypto_api_key = "641209cc5125f295360f388673546b58ea5e5a6d26846d4b05bd03d61ef8e4f2";


routes.get('/', (req, res) => {
    res.status(200).json({});
});

/**
 * @swagger
 * /crypto/top-100-cryptos:
 *   get:
 *     description: Get top 100
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


    let url = `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${symbol}&tsym=USD&limit=30&api_key=${crypto_api_key}`;
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


    let url = `https://min-api.cryptocompare.com/data/v2/histohour?fsym=${symbol}&tsym=USD&limit=24&api_key=${crypto_api_key}`;
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
 * /crypto/news:
 *   get:
 *     description: Get recent news articles
 *     responses:
 *       200:
 *         description: Success
 */

// get recent news
routes.get('/news', (req, res) => {
    let url = `https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=${crypto_api_key}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            res.send({ data });
        });
});

module.exports = {
    routes
}

