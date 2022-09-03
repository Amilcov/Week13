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
      name: 'Twitter',
      symbol: "TWTR",
      "yearListed": 2013,
      "marketShares": '765.25 M',
      "marketValue": '33.87 T',
      info: "Year listed IPO: 6 November 2013",
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
