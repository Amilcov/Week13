'use strict';
const bcrypt = require('bcryptjs');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Transaction, {foreignKey: 'userId'});
    };
  }

  User.init({
    firstname: {
      allowNull: false,
      type: DataTypes.STRING
    },
    lastname: {
      allowNull: false,
      type: DataTypes.STRING
    },
    
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },

    username: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING.BINARY
    }
  }, {
    sequelize,
    modelName: 'User',
  });

  User.prototype.validatePassword = function(password) { 
    return bcrypt.compareSync(password, this.password.toString());
  }
  return User;
};