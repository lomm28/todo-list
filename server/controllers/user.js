/* eslint-disable no-return-await */

const User = require('../models/User');

const createUser = async ({ name, password }) => await User.create({ name, password });

const getAllUsers = async () => await User.findAll();

const getUser = async (obj) => await User.findOne({
  where: obj,
});

const getUserById = async (userId) => await User.findOne({
  where: {
    id: userId,
  },
});

module.exports = {
  createUser, getAllUsers, getUser, getUserById,
};
