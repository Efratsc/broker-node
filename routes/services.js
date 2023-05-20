const express = require('express');
const serviceController = require('../controllers/service-controller');

const router = express.Router();

// GET /services - Get all services
router.get('/services', serviceController.getAllServices);

// GET /services/:id - Get a single service by ID
router.get('/services/:id', serviceController.getServiceById);

// POST /services - Create a new service
router.post('/services', serviceController.createService);

// PUT /services/:id - Update a service by ID
router.put('/services/:id', serviceController.updateServiceById);

// DELETE /services/:id - Delete a service by ID
router.delete('/services/:id', serviceController.deleteServiceById);

module.exports = router;
