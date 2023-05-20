const express = require('express');
const router = express.Router();
const connectionController = require('../controllers/connection-controller');

// Create a new connection
router.post('/connections', connectionController.createConnection);

// Get all connections
router.get('/connections', connectionController.getAllConnections);

// Delete a connection by ID
router.delete('/connections/:id', connectionController.deleteConnection);

module.exports = router;
