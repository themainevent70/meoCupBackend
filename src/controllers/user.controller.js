const User = require('../models/user.model');

// GET all users
exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// POST create user
exports.createUser = async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json(user);
};
