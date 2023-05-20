const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = sequelize.define('user', {
   user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    service_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    kebele: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    woreda: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    family_member: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    experience: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    property: {
      type: DataTypes.BLOB('long'),
      allowNull: true,
    },
  }, {
    tableName:'users',
    timestamps: false,
  });
  
  module.exports=User;