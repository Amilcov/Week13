'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Stock.hasMany(models.Transaction, {
        as: 'transaction',
        foreignKey: 'stockId'
      })
    }
  }
  Stock.init({
    name: { 
      allowNull: false,
      type: DataTypes.STRING
    },
    symbol: {
      allowNull: false,
      type: DataTypes.STRING
    },
    yearListed: {
      type: DataTypes.INTEGER
    },
    marketShares: {
      type: DataTypes.STRING
    },
    marketValue: {
      type: DataTypes.STRING
    },
    info: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Stock',
  });
  return Stock;
};