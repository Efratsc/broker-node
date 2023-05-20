// Assuming you have already defined a Sequelize instance named 'sequelize'
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Connection = sequelize.define('connection', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId1: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users', // Assuming the name of your user table is 'Users'
        key: 'user_id'
      }
    },
   userId2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'user_id'
      }
    },
    connectionType: {
      type: DataTypes.STRING,
      allowNull: false
    },},{ 
         tableName: 'connection', 
         timestamps: false,

  });
  
  module.exports = Connection;
  