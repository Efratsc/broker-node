const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user-model');

const Login = sequelize.define('login', {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: User,
      key: 'id'
    }
  },
  user_name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  password: {
    type: DataTypes.STRING(50),
    allowNull: false
  }
}, {
  tableName: 'login',
  timestamps: false
});
Login.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user',
  });
  User.hasOne(Login, {
    foreignKey: 'user_id',
    as: 'login',
  });
module.exports = Login;
