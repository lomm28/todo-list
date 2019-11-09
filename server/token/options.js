require('dotenv').config();
const passportJWT = require('passport-jwt');

const { ExtractJwt } = passportJWT;

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

module.exports = jwtOptions;
