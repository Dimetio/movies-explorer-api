const router = require('express').Router();
const { createMovieValidate, paramsMovieValidate } = require('../middlewares/joi-schemas');
const { getCurrentUserMovies, createMovie, deleteMovie } = require('../controllers/movies');

router.get('/', getCurrentUserMovies);
router.post('/', createMovieValidate, createMovie);
router.delete('/:movieId', paramsMovieValidate, deleteMovie);

module.exports = router;
