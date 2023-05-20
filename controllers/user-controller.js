const User = require('../models/user-model');

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single user by ID
exports.getUserById = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findByPk(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new user
exports.createUser = async (req, res) => {
  const { first_name, last_name, phone_number, kebele, woreda, family_member, email, experience, property, username, password } = req.body;
  try {
    const user = await User.create({ first_name, last_name, phone_number, kebele, woreda, family_member, email, experience, property, username, password });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an existing user
exports.updateUser = async (req, res) => {
  const id = req.params.id;
  const { first_name, last_name, phone_number, kebele, woreda, family_member, email, experience, property } = req.body;
  try {
    const user = await User.findByPk(id);
    if (user) {
      user.first_name = first_name;
      user.last_name = last_name;
      user.phone_number = phone_number;
      user.kebele = kebele;
      user.woreda = woreda;
      user.family_member = family_member;
      user.email = email;
      user.experience = experience;
      user.property = property;
      await user.save();
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a user
exports.deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findByPk(id);
    if (user) {
      await user.destroy();
      res.json({ message: `User with ID ${id} deleted successfully!` });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
