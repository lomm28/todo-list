require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const passport = require("passport");
const passportJWT = require("passport-jwt");
require("./models/User");

const { getUser } = require("./utils");

const { ExtractJwt, Strategy } = passportJWT;

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
};

const strategy = new Strategy(jwtOptions, (jwt_payload, next) => {
  console.log("payload received", jwt_payload);
  const user = getUser({ id: jwt_payload.id });
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

app.listen(8000, () => console.log(`Express is running on port 8000`));

require("./routes")(app, jwtOptions);
