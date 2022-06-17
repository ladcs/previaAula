const express = require('express');
const user = require('./user');
const Class = require('./Class');
const lab = require('./lab');
const TCC = require('./Tcc');

const app = express.Router();

app.use('/', user);
app.use('/', Class);
app.use('/', lab);
app.use('/', TCC);

module.exports = app;