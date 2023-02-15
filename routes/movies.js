const movieRouter = require('express').Router();

movieRouter.get('/', getMovies);
movieRouter.post('/', createMovie);
movieRouter.delete('/:movieId', deleteMovieById);

module.exports = movieRouter;
