const mongoose = require('mongoose');
const isUrl = require('validator/lib/isURL');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: [true, 'Обазательное поле'],
  },
  director: {
    type: String,
    required: [true, 'Обазательное поле'],
  },
  duration: {
    type: Number,
    required: [true, 'Обазательное поле'],
  },
  year: {
    type: String,
    required: [true, 'Обазательное поле'],
  },
  description: {
    type: String,
    required: [true, 'Обазательное поле'],
  },
  image: {
    type: String,
    required: [true, 'Обазательное поле'],
    validate: {
      validator: (url) => isUrl(url),
      message: 'Некорректный url',
    },
  },
  trailerLink: {
    type: String,
    required: [true, 'Обазательное поле'],
    validate: {
      validator: (url) => isUrl(url),
      message: 'Некорректный url',
    },
  },
  thumbnail: {
    type: String,
    required: [true, 'Обазательное поле'],
    validate: {
      validator: (url) => isUrl(url),
      message: 'Некорректный url',
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, 'Обазательное поле'],
    ref: 'user',
  },
  movieId: {
    type: String,
    required: [true, 'Обазательное поле'],
  },
  nameRU: {
    type: String,
    required: [true, 'Обазательное поле'],
  },
  nameEN: {
    type: String,
    required: [true, 'Обазательное поле'],
  },
});

module.exports = mongoose.model('movie', movieSchema);
