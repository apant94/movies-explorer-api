const movieRouter = require('express').Router();

const { getMovies, createMovie, deleteMovieById } = require('../controllers/movies');
const { validateCreateMovie, validateDeleteMovieById } = require('../middlewares/validate');

movieRouter.get('/', getMovies);
movieRouter.post('/', validateCreateMovie, createMovie);
movieRouter.delete('/:movieId', validateDeleteMovieById, deleteMovieById);

module.exports = movieRouter;
