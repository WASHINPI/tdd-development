const express = require('express');
const bodyParcer = require('body-parser');
const { logger } = require('./lib');
const dictionaryRouter = require('./dictionary-route');


const app = express();

app.use(bodyParcer.json())
app.use(logger)
app.use(express.static('client'))
app.use('/dictionary',dictionaryRouter);




module.exports = app;