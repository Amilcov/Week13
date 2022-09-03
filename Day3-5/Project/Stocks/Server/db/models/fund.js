'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fund extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Fund.init({
    value: {
      allowNull: false,
      type: DataTypes.NUMERIC(6,2)
    },
    action: {
      allowNull: false,
      type: DataTypes.STRING
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
    modelName: 'Fund',
  });
  return Fund;
};