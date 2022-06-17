const express = require('express');
const multer  = require('multer');
const multerConfig = require('../config/multer');
const controller = require('../controller/tccController');
const auth = require('../middleware/auth');
const app = express.Router();

app.get('/tcc', controller.getAll);
app.post('/tcc', auth, multer(multerConfig).single('file'), controller.createTcc);
app.delete('/tcc/:id', auth, controller.delete);

module.exports = app;
