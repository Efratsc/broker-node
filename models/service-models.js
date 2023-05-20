const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 
const Service = sequelize.define('service', {
  service_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    field: 'service_id',
  },
  service_title: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  service_icon: {
    type: DataTypes.BLOB('long'),
    allowNull:true
  },
  service_description: {
    type: DataTypes.TEXT,
    allowNull:true
  }
},   {
    sequelize,
   // modelName: 'service', 
    tableName: 'service', 
    timestamps: false,
  }
);

module.exports = Service;
