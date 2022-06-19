const express = require('express');
const bodyParser = require('body-parser');
const error = require('./src/middleware/error');
const routes = require('./src/route');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || '3003';

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

app.use('/files', express.static(path
  .resolve(__dirname, '..', 'uploads')));

app.use('/', routes);
app.use(error);
