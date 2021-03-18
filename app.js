//External Modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
//Private Modules
const app = express();


app.use(cors())
app.options('*', cors())

app.get('/', async (req, res) => {
    res.status(200).send(JSON.stringify({ 
        message: '11Elements - Timeout Test Server', 
        endpoints: '/timeout',
        status: 200,
        available: true }, 
        null, 
    2));
});

app.get('/timeout', cors(), (req, res, next) => {
    
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

module.exports = app;