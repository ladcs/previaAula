const express = require('express');
const multer  = require('multer');
const multerConfig = require('../config/multer');
const auth = require('../middleware/auth');
const controller = require('../controller/classController');

const app = express.Router();

app.get('/class', controller.getAll);
app.post('/class', auth, controller.createClass);
app.post('/class/:id', auth, multer(multerConfig).single('file'), controller.createLink);
app.delete('/class/:id', auth, controller.deleteClass);
app.delete('/class/link/:id', auth, controller.deleteLink);

module.exports = app;