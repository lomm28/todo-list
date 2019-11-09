const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const passportJWT = require('passport-jwt');
require('./models/User');
require('./models/Todo');

const { getUser } = require('./controllers/user');
const jwtOptions = require('./token/options');

const { Strategy } = passportJWT;

const strategy = new Strategy(jwtOptions, (jwtPayload, next) => {
  const user = getUser({ id: jwtPayload.id });
  if (user) {
    next(null, user);
  } else {
    next(null, false);
  }
});

passport.use(strategy);

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());

app.listen(8000, () => console.log('Express is running on port 8000'));

require('./routes/user')(app);
require('./routes/todo')(app);
