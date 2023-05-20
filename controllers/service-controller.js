const Service = require('../models/service-models');

// GET /services - Get all services
async function getAllServices(req, res) {
  try {
    const services = await Service.findAll();
    res.json(services);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to retrieve services' });
  }
}


async function getServiceById(req, res) {
    const serviceId = parseInt(req.params.id);
    console.log('serviceId:', serviceId);
  
    if (isNaN(serviceId)) {
      console.log('Invalid service ID:', req.params.id);
      res.status(400).json({ error: 'Invalid service ID' });
      return;
    }
    try {
        const service = await Service.findByPk(serviceId, { attributes: ['service_id', 'service_title', 'service_icon', 'service_description'] });
    
        if (!service) {
          res.status(404).json({ error: 'Service not found' });
        } else {
          res.json(service);
        }
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to retrieve service' });
      }
  }
  

// POST /services - Create a new service
async function createService (req, res) {
  const { service_title, service_icon, service_description } = req.body;
  try {
    const service = await Service.create({
      service_title,
      service_icon,
      service_description
    });
    res.json(service);
    //res.status(201).json({ id: service.id });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to create service' });
  }
}

// PUT /services/:id - Update a service by ID
async function updateServiceById(req, res) {
  const serviceId = req.params.id;
  const { service_title, service_icon, service_description } = req.body;
  try {
    const service = await Service.findByPk(serviceId, { attributes: ['service_id', 'service_title', 'service_icon', 'service_description'] });
    if (!service) {
      res.status(404).json({ error: 'Service not found' });
    } else {
      await service.update({
        service_title,
        service_icon,
        service_description
      });
      res.sendStatus(200);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to update service' });
  }
}

// DELETE /services/:id - Delete a service by ID
async function deleteServiceById(req, res) {
  const serviceId = req.params.i;
  try {
    const service = await Service.findByPk(serviceId);
    if (!service) {
      res.status(404).json({ error: 'Service not found' });
    } else {
      await service.destroy();
      res.sendStatus(200);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to delete service' });
  }
}

module.exports = {
  getAllServices,
  getServiceById,
 createService,
  updateServiceById,
  deleteServiceById
};
