const userRouter = require('express').Router();

const getCurrentUser = require('../controllers/users');
const editCurrentUser = require('../controllers/users');

userRouter.get('/me', getCurrentUser);
userRouter.patch('/me', editCurrentUser);

module.exports = userRouter;
