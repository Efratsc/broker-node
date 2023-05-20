const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user-model');

const Transaction = sequelize.define('transactions', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: users,
      key: 'id'
    }
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  transaction_type: {
    type: DataTypes.STRING(50),
    allowNull: false
  }
}, {
  tableName: 'transactions',
  timestamps: false
});

Transaction.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'user'
});

module.exports = Transaction;
