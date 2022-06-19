const express = require('express');
const multer  = require('multer');
const multerConfig = require('../config/multer');
const controller = require('../controller/labController');
const auth = require('../middleware/auth');
const app = express.Router();

app.get('/lab', controller.getAll);
app.post('/lab', auth, multer(multerConfig).single('file'), controller.createLab);
app.patch('/lab/:id', auth, controller.changeNameLab);
app.delete('/lab/:id', auth, controller.delete);

module.exports = app;
