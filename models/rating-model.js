const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const User = require('../models/user-model');

class Rating extends Model {}

Rating.init(
  {
    rating_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    star_value: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'Rating',
    tableName: 'rating',
    timestamps: false,
  }
);

module.exports = Rating;
