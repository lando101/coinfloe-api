const express = require('express');
// const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const {
    routes: cryptoRoutes,
} = require('./crypto/routes');

const {
    routes: newsRoutes,
} = require('./news/routes');

const {
    routes: cryptoLiveRoutes,
} = require('./crypto-socket/routes');


const app = express();

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Coinfloe-API',
            version: '1.0.0'
        }
    },
    apis: ['src/crypto/routes.js', 'src/news/routes.js', 'src/crypto-socket/routes.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));


app.use(cors());
app.use(express.json());
app.use('/crypto', cryptoRoutes);
app.use('/news', newsRoutes);
app.use('/crypto-socket', cryptoLiveRoutes)
/**
 * @swagger
 * /top-100-cryptos:
 *   get:
 *     description: Get top 100
 *     responses:
 *       200:
 *         description: Success
 */

// get top 100 cryptos
app.get('/top-100-cryptos', (req, res) => {
    let url = `https://min-api.cryptocompare.com/data/top/totalvolfull?limit=100&tsym=USD&api_key=${crypto_api_key}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            res.send({ data });
        });
});
app.listen(5000, () => console.log("listening on 5000"));




module.exports = app;

