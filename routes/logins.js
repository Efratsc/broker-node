const express = require('express');
const router = express.Router();
const loginController = require('../controllers/login-controller');

// GET /logins
router.get('/login', loginController.getAllLogins);

// GET /logins/:id
router.get('/login/:id', loginController.getLoginById);

// POST /logins
//router.post('/', loginController.createLogin);

// PUT /logins/:id
//router.put('/:id', loginController.updateLoginById);

// DELETE /logins/:id
//router.delete('/:id', loginController.deleteLoginById);

module.exports = router;
