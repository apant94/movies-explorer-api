const movieRouter = require('express').Router();

const getMovies = require('../controllers/movies');
const createMovie = require('../controllers/movies');
const deleteMovieById = require('../controllers/movies');

movieRouter.get('/', getMovies);
movieRouter.post('/', createMovie);
movieRouter.delete('/:movieId', deleteMovieById);

module.exports = movieRouter;
