const Login = require('../models/login-model');
const User = require('../models/user-model');

// GET /logins - Get all logins
async function getAllLogins(req, res) {
    try {
      const logins = await Login.findAll({
        include: [{ model: User, as: 'user' }] // Include the User model with the specified alias
      });
      res.json(logins);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to retrieve logins' });
    }
  }

// GET /logins/:id - Get a single login by ID
async function getLoginById(req, res) {
    const userId = req.params.id;
    try {
      const login = await Login.findByPk(userId, {
        include: [{ model: User, as: 'user' }] // Include the User model with the specified alias
      });
      if (!login) {
        res.status(404).json({ error: 'Login not found' });
      } else {
        res.json(login);
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to retrieve login' });
    }
  }

// Other controller functions (createLogin, updateLoginById, deleteLoginById) remain the same...

module.exports = {
  getAllLogins,
  getLoginById,
  ////createLogin,
  //updateLoginById,
  //deleteLoginById,
};
