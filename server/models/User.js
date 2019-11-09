const Sequelize = require('sequelize');
const sequelize = require('../db');
const Todo = require('./Todo');

const User = sequelize.define('user', {
  name: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
});

User.hasMany(Todo, { as: 'Todos' });

User.sync()
  .then(() => console.log('User table created successfully'))
  .catch(err => console.log('Something went wrong', err));

module.exports = User;
