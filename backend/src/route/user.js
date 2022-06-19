const express = require('express');
const Controller = require('../controller/UserController');
const auth = require('../middleware/auth');
const controller  = new Controller();

const app = express.Router();

app.post('/login', controller.login);
app.post('/login/register', auth, controller.createUser);

module.exports = app;