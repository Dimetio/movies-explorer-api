const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { errors } = require('celebrate');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const handleError = require('./middlewares/handleError');
const router = require('./routes');
const NotFoundError = require('./errors/NotFoundError');

const { PORT = 3000, DB_CONNECT = 'mongodb://localhost:27017/bitfilmsdb' } = process.env;

const app = express();

const options = {
  origin: [
    'http://localhost:3000',
  ],
  credentials: true,
};
app.use('*', cors(options)); // доступность cors

app.use(cookieParser()); // куки
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(DB_CONNECT); // подключение к базе

app.use(requestLogger); // логгер запросов

app.use('/', router); // все роуты

app.use(errorLogger); // логгре запросов с ошибками

app.all('*', (req, res, next) => {
  next(new NotFoundError('Неправильный путь. Error 404'));
});

app.use(errors());

app.use(handleError);

app.listen(PORT);
