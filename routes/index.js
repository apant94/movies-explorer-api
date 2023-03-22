const router = require('express').Router();
const userRouter = require('./users');
const movieRouter = require('./movies');
const auth = require('../middlewares/auth');
const { createUser, login } = require('../controllers/users');
const { validateSignIn, validateSignUp } = require('../middlewares/validate');
const NotFoundError = require('../errors/NotFoundError');

router.post('/signup', validateSignUp, createUser);
router.post('/signin', validateSignIn, login);
router.use(auth);
router.use('/users', userRouter);
router.use('/movies', movieRouter);
router.use('*', (req, res, next) => {
  next(new NotFoundError('Указанный путь не найден'));
});

module.exports = router;
