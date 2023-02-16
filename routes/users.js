const userRouter = require('express').Router();

const { getCurrentUser, editCurrentUser } = require('../controllers/users');
const { validateEditCurrentUser } = require('../middlewares/validate');

userRouter.get('/me', getCurrentUser);
userRouter.patch('/me', validateEditCurrentUser, editCurrentUser);

module.exports = userRouter;
