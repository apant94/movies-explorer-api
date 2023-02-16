const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/users');
const movieRouter = require('./routes/movies');
const auth = require('./middlewares/auth');
const { createUser, login } = require('./controllers/users');
const { validateSignIn, validateSignUp } = require('./middlewares/validate');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const NotFoundError = require('./errors/NotFoundError');
const { rootErrorHandler } = require('./middlewares/rootErrorHandler');

const { PORT = 3000 } = process.env;

const app = express();

mongoose.connect('mongodb://localhost:27017/moviedb');

app.use(express.json());

app.use(requestLogger);

app.post('/signup', validateSignUp, createUser);
app.post('/signin', validateSignIn, login);
app.use(auth);
app.use('/users', userRouter);
app.use('/movies', movieRouter);
app.use('*', (req, res, next) => {
  next(new NotFoundError('Указанный путь не найден'));
});
app.use(errorLogger);
app.use(rootErrorHandler);

app.listen(PORT);
