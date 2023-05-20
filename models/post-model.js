const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('../models/user-model');
const Service = require('../models/service-models');

const Post = sequelize.define('post', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  service_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  image: {
    type: DataTypes.BLOB('long'),
    allowNull: true,
  },
},
  {
    sequelize,
   // modelName: 'service', 
    tableName: 'post', 
    timestamps: false,
  });


Post.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'user',
});

Post.belongsTo(Service, {
  foreignKey: 'service_id',
  as: 'service',
});

module.exports = Post;
