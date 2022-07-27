const Movie = require('../models/movie');
const NotFoundError = require('../errors/NotFoundError');
const ForbiddenError = require('../errors/ForbiddenError');
const BadRequestError = require('../errors/BadRequestError');

const getCurrentUserMovies = (req, res, next) => {
  Movie.find({ owner: req.user._id })
    .then((movies) => res.send(movies))
    .catch(next);
};

const createMovie = (req, res, next) => {
  const { body } = req;
  body.owner = req.user._id;

  Movie.create({ body })
    .then((movie) => res.send(movie))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError());
        return;
      }

      next(err);
    });
};

const deleteMovie = (req, res, next) => {
  Movie.findById(req.params.movieId)
    .then((movie) => {
      if (!movie) {
        throw new NotFoundError();
      }

      if (movie.owner.toString() !== req.user._id) {
        throw new ForbiddenError();
      }
      Movie.findByIdAndRemove(req.params.movieId)
        .then(() => res.send(movie))
        .catch(next);
    })
    .catch(next);
};

module.exports = {
  getCurrentUserMovies,
  createMovie,
  deleteMovie,
};
