'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Transaction.belongsTo(models.User, {
        as: 'user',
        foreignKey: 'userId'
      });
      Transaction.belongsTo(models.Stock, {
        as: 'stock',
        foreignKey: 'stockId'
      });
    }
  }
  Transaction.init({
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    stockId: { 
      allowNull: false,
      type: DataTypes.INTEGER 
    },
    action: { 
      allowNull: false,
      type: DataTypes.STRING 
    },
    quantity: { 
      allowNull: false,
      type: DataTypes.DOUBLE
    },
    price: { 
      allowNull: false,
      type: DataTypes.NUMERIC(6,2)
    },
    exchanged: { 
      allowNull: false,
      type: DataTypes.NUMERIC(6,2)
    },
    fee: { 
      allowNull: false,
      type: DataTypes.NUMERIC(4,2)
    },
    totalCredit: { 
      allowNull: false,
      type: DataTypes.NUMERIC(6,2)
    },
    date: { 
      allowNull: false,
      type: DataTypes.DATEONLY
    },
    time: { 
      allowNull: false,
      type: DataTypes.TIME
    }
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};