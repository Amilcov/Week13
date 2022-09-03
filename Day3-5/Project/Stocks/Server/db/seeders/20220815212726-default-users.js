'use strict';
const bcrypt = require('bcryptjs');


module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert("Users", [
      { firstname: "Adriana", 
        lastname: "C.", 
        username: "adriana", 
        email: "a@y.com", 
        password: bcrypt.hashSync('adriana', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      { firstname: "UserDemo1!", 
        lastname: "Account", 
        username: "userDemo1!", 
        email: "UserDemo1!@y.com", 
        password: bcrypt.hashSync('userDemo1!', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },

      { firstname: "test!", 
        lastname: "user", 
        username: "test", 
        email: "testA1!@y.com", 
        password: bcrypt.hashSync('testA1!', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {})
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("Users", null, {});
  }
};
