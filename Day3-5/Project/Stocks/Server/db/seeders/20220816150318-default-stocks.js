'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Stocks', [
    
   {
      name: 'Google',
      symbol: "GOOG",
      "yearListed": 2004,
      "marketShares": '14.462 B',
      "marketValue": '1.451 T',
      info: "Year listed IPO: 14 Auguest 2004",
      createdAt: new Date(),
      updatedAt: new Date()
   },



  ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
