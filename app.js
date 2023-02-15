const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/users');
const movieRouter = require('./routes/movies');

const { PORT = 3000 } = process.env;

const app = express();

mongoose.connect('mongodb://localhost:27017/moviedb');

app.use('/users', userRouter);
app.use('/movies', movieRouter);

app.listen(PORT);
