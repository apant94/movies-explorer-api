const { celebrate, Joi } = require('celebrate');

const regex = /http[s]?:\/\/([\w.]+\/?)\S*/;

module.exports.validateSignUp = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
    name: Joi.string().min(2).max(20),
  }),
});

module.exports.validateSignIn = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

module.exports.validateEditCurrentUser = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
  }),
});

module.exports.validateCreateMovie = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.number().required(),
    description: Joi.string().required(),
    image: Joi.string().regex(regex).required(),
    trailerLink: Joi.string().regex(regex).required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
    thumbnail: Joi.string().regex(regex).required(),
    movieId: Joi.number().required(),
  }),
});

module.exports.validateDeleteMovieById = celebrate({
  params: Joi.object().keys({
    _id: Joi.string().hex().length(24).required(),
  }).unknown(true),
});
