const express = require('express');
const multer  = require('multer');
const multerConfig = require('../config/multer');
const controller = require('../controller/labController');
const auth = require('../middleware/auth');
const app = express.Router();

app.get('/lab', controller.getAll);
app.post('/lab', multer(multerConfig).single('file'), controller.createLab);
app.delete('/lab/:id', controller.delete);

module.exports = app;
