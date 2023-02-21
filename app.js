require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const { errors } = require('celebrate');
const router = require('./routes');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { rootErrorHandler } = require('./middlewares/rootErrorHandler');
const { DB_ADRESS_DEV } = require('./utils/constants');

const { PORT = 3000 } = process.env;
const { NODE_ENV, DB_ADRESS } = process.env;

const app = express();

app.use(cors());

mongoose.connect(NODE_ENV === 'production' ? DB_ADRESS : DB_ADRESS_DEV);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(helmet());
app.use(express.json());

app.use(requestLogger);
app.use(limiter);

app.use(router);
app.use(errorLogger);
app.use(errors());
app.use(rootErrorHandler);

app.listen(PORT);
