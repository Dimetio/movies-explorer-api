const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { errors } = require('celebrate');
const { requestLogger, errorLogger } = require('./middlewares/logger');
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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(DB_CONNECT); // подключение к базе

app.use(requestLogger);

app.use(errorLogger);

app.all('*', (req, res, next) => {
  next(new NotFoundError('Неправильный путь. Error 404'));
});

app.use(errors());

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;

  res
    .status(statusCode)
    .send({
      message: statusCode === 500
        ? 'На сервере произошла ошибка'
        : message,
    });
});

app.listen(PORT);
