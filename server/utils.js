const User = require("./models/User");

const createUser = async ({ name, password }) =>
  await User.create({ name, password });

const getAllUsers = async () => await User.findAll();

const getUser = async obj =>
  await User.findOne({
    where: obj
  });

module.exports = { createUser, getAllUsers, getUser };
