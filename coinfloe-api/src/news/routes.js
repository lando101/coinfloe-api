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
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => {
            res.send({ data });
        });
});

/**
 * @swagger
 * /news/videos:
 *   get:
 *     description: Get videos
 *     tags:
 *     - Crypto News API
 *     responses:
 *       200:
 *         description: Success
 */
 routes.get('/videos', (req, res) => {
    let url = `https://cryptonews-api.com/api/v1/category?section=general&type=video&items=50&token=${news_api_key}`;
    console.log(url);
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
        });
});

/**
 * @swagger
 * /news/search/{search}:
 *   get:
 *     description: Get news for keywords
 *     tags:
 *     - Crypto News API
 *     responses:
 *       200:
 *         description: Success
 *     parameters:
 *     - name: search
 *       description: get news based on keywords
 *       in: path
 *       required: true
 *       type: string
 */
// get news for specific coin
routes.get('/search/:search', (req, res) => {
    let search = req.params.search.toString();
    // let url = `https://cryptonews-api.com/api/v1?tickers=${search_term.toUpperCase()}&items=50&token=${news_api_key}`
    let url =`https://cryptonews-api.com/api/v1/category?section=alltickers&search=${search.toLowerCase()}&items=50&token=${news_api_key}`;
    console.log(req.params.search.toString());

    fetch(url)
        .then(res => res.json())
        .then(data => {
            res.send({ data });
        });
});

/**
 * @swagger
 * /news/topic/{topic}:
 *   get:
 *     description: Get news for keywords
 *     tags:
 *     - Crypto News API
 *     responses:
 *       200:
 *         description: Success
 *     parameters:
 *     - name: topic
 *       description: get news based on keywords
 *       in: path
 *       required: true
 *       type: string
 */
// get news for specific coin
routes.get('/topic/:topic', (req, res) => {
    let topic = req.params.topic.toString();
    // let url = `https://cryptonews-api.com/api/v1?tickers=${search_term.toUpperCase()}&items=50&token=${news_api_key}`
    let url =`https://cryptonews-api.com/api/v1/category?section=alltickers&topic=${topic.toLowerCase()}&items=50&token=${news_api_key}`;
    console.log(req.params.topic.toString());

    fetch(url)
        .then(res => res.json())
        .then(data => {
            res.send({ data });
        });
});

/**
 * @swagger
 * /news/video/topic/{topic}:
 *   get:
 *     description: Get news for keywords
 *     tags:
 *     - Crypto News API
 *     responses:
 *       200:
 *         description: Success
 *     parameters:
 *     - name: topic
 *       description: get news based on keywords
 *       in: path
 *       required: true
 *       type: string
 */
// get news for specific coin
routes.get('/video/topic/:topic', (req, res) => {
    let topic = req.params.topic.toString();
    // let url = `https://cryptonews-api.com/api/v1?tickers=${search_term.toUpperCase()}&items=50&token=${news_api_key}`
    let url =`https://cryptonews-api.com/api/v1/category?section=general&topic=${topic.toLowerCase()}&type=video&sortby=rank&items=50&token=${news_api_key}`;
    console.log(req.params.topic.toString());
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => {
            res.send({ data });
        });
});

/**
 * @swagger
 * /news/video/search/{search}:
 *   get:
 *     description: Get news for keywords
 *     tags:
 *     - Crypto News API
 *     responses:
 *       200:
 *         description: Success
 *     parameters:
 *     - name: search
 *       description: get news based on keywords
 *       in: path
 *       required: true
 *       type: string
 */
// get news for specific coin
routes.get('/video/search/:search', (req, res) => {
    let search = req.params.search.toString();
    // let url = `https://cryptonews-api.com/api/v1?tickers=${search_term.toUpperCase()}&items=50&token=${news_api_key}`
    let url =`https://cryptonews-api.com/api/v1/category?section=general&search=${search.toLowerCase()}&type=video&sortby=rank&items=50&token=${news_api_key}`;
    console.log(req.params.search.toString());
    console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(data => {
            res.send({ data });
        });
});

/**
 * @swagger
 * /news/video/ticker/{ticker}:
 *   get:
 *     description: Get news for keywords
 *     tags:
 *     - Crypto News API
 *     responses:
 *       200:
 *         description: Success
 *     parameters:
 *     - name: ticker
 *       description: get news based on keywords
 *       in: path
 *       required: true
 *       type: string
 */
// get news for specific coin
routes.get('/video/ticker/:ticker', (req, res) => {
    let ticker = req.params.ticker.toString();
    // let url = `https://cryptonews-api.com/api/v1?tickers=${search_term.toUpperCase()}&items=50&token=${news_api_key}`
    let url =`https://cryptonews-api.com/api/v1/?tickers=${ticker.toLowerCase()}&type=video&sortby=rank&items=50&token=${news_api_key}`;
    console.log(req.params.ticker.toString());
    console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(data => {
            res.send({ data });
        });
});


module.exports = {
    routes
}