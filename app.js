var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config()

var recipesRouter = require('./routes/recipes');
var keysRouter = require('./routes/keys');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/keys', keysRouter);
app.use('/api/v1/recipes', recipesRouter);

module.exports = app;
