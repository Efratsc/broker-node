const Connection = require('../models/connection-models');

// Create a connection between two users
async function createConnection(req, res) {
  const { userId1, userId2, connectionType } = req.body;

  try {
    const connection = await Connection.create({
      userId1,
      userId2,
      connectionType
    });

    res.status(201).json(connection);
  } catch (error) {
    console.error('Error creating connection:', error);
    res.status(500).json({ error: 'Failed to create connection' });
  }
}

// Get all connections
async function getAllConnections(req, res) {
  try {
    const connections = await Connection.findAll();
    res.json(connections);
  } catch (error) {
    console.error('Error retrieving connections:', error);
    res.status(500).json({ error: 'Failed to retrieve connections' });
  }
}

// Delete a connection by ID
async function deleteConnection(req, res) {
  const connectionId = req.params.id;

  try {
    const numDeleted = await Connection.destroy({
      where: { id: connectionId }
    });

    if (numDeleted === 0) {
      res.status(404).json({ error: 'Connection not found' });
    } else {
      res.json({ message: 'Connection deleted successfully' });
    }
  } catch (error) {
    console.error('Error deleting connection:', error);
    res.status(500).json({ error: 'Failed to delete connection' });
  }
}

module.exports = {
  createConnection,
  getAllConnections,
  deleteConnection
};
