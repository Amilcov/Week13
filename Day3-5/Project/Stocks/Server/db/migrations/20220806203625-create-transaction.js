'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users'
        }
      },
      stockId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Stocks'
        }
      },
      action: {
        allowNull: false,
        type: Sequelize.STRING
      },
      quantity: {
        allowNull:false,
        type: Sequelize.DOUBLE
      },
      price: {
        allowNull:false,
        type: Sequelize.NUMERIC(6,2)
      },
      exchanged: {
        allowNull:false,
        type: Sequelize.NUMERIC(6,2)
      },
      fee: {
        allowNull:false,
        type: Sequelize.NUMERIC(4,2)
      },
      totalCredit: {
        allowNull:false,
        type: Sequelize.NUMERIC(6,2)
      },
      date: {
        allowNull:false,
        type: Sequelize.DATEONLY
      },
      time: {
        allowNull:false,
        type: Sequelize.TIME
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Transactions');
  }
};