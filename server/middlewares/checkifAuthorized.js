/* eslint-disable import/no-extraneous-dependencies */

require('dotenv').config();
const jwt = require('jsonwebtoken');
const jwtOptions = require('../token/options');

const checkIfAuthorized = (req, res, next) => {
  const { headers } = req;
  if (headers && headers.authorization) {
    const { authorization } = headers;
    const decoded = jwt.verify(authorization, jwtOptions.secretOrKey);
    if (decoded.id) {
      return next();
    }
  }
  return res.status(401).json({ msg: 'Please login or create account!' });
};

module.exports = checkIfAuthorized;
