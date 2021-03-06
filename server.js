'use strict';

const morgan = require('morgan');
const express = require('express');
const createError = require('http-errors');
const debug = require('debug')('car:server');

const carRouter = require('./route/car-route.js');
const cors = require('./lib/cors-middleware.js');
const errors = require('./lib/error-middleware.js');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(morgan('dev'));
app.use(cors);
app.use(carRouter);
app.use(errors); // always the last middleware

app.listen(PORT, () => {
  console.log('server up:' ,PORT);
});
