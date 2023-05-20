const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('broker', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
