const express = require('express');
const fetch = require('node-fetch');

const routes = express.Router({
    mergeParams: true
});

const news_api_key = "k3bxcvb6thq6s65c8wim6qcheazsphkihf0kdd1t";

/**
 * @swagger
 * /news/all-news:
 *   get:
 *     description: Get global metrics
 *     tags:
 *     - Crypto News API
 *     responses:
 *       200:
 *         description: Success
 */
// get all recent news
routes.get('/all-news', (req, res) => {
    let url = `https://cryptonews-api.com/api/v1/category?section=general&sortby=rank&items=50&token=${news_api_key}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            res.send({ data });
        });
});

/**
 * @swagger
 * /news/{symbol}:
 *   get:
 *     description: Get news for specific coin
 *     tags:
 *     - Crypto News API
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
// get news for specific coin
routes.get('/:symbol', (req, res) => {
    let symbol = req.params.symbol.toString();
    let url = `https://cryptonews-api.com/api/v1?tickers=${symbol.toUpperCase()}&items=50&token=${news_api_key}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            res.send({ data });
        })
})


module.exports = {
    routes
}