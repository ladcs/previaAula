const express = require('express');
const Controller = require('../controller/UserController');
const auth = require('../middleware/auth');
const controller  = new Controller();

const app = express.Router();

app.get('/login', controller.login);
app.post('/login', auth, controller.createUser);

module.exports = app;