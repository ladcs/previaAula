const express = require('express');
const multer  = require('multer');
const multerConfig = require('../config/multer');
const auth = require('../middleware/auth');
const controller = require('../controller/classController');

const app = express.Router();

app.get('/class', controller.getAll);
app.post('/class', auth, multer(multerConfig).single('file'), controller.createClass);

module.exports = app;