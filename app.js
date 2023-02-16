const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/users');
const movieRouter = require('./routes/movies');
const auth = require('./middlewares/auth');
const { createUser, login } = require('./controllers/users');
const { validateSignIn, validateSignUp } = require('./middlewares/validate');

const { PORT = 3000 } = process.env;

const app = express();

mongoose.connect('mongodb://localhost:27017/moviedb');

app.use(express.json());

app.post('/signup', validateSignUp, createUser);
app.post('/signin', validateSignIn, login);
app.use(auth);
app.use('/users', userRouter);
app.use('/movies', movieRouter);

app.listen(PORT);
