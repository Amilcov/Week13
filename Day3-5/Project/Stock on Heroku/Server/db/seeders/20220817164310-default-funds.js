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

    await queryInterface.bulkInsert('Funds', [
      {
        value: 100,
        action: 'Fund',
        date: '2020-01-23',
        time: '14:33',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 10,
        action: 'Fund',
        date: '2020-01-23',
        time: '17:08',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 250,
        action: 'Fund',
        date: '2020-08-31',
        time: '19:26',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 10,
        action: 'Fund',
        date: '2020-08-31',
        time: '20:14',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 10,
        action: 'Fund',
        date: '2020-08-31',
        time: '20:25',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 0.01,
        action: 'CustodyFee',
        date: '2020-11-19',
        time: '01:36',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 0.01,
        action: 'CustodyFee',
        date: '2020-12-01',
        time: '01:55',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 0.01,
        action: 'CustodyFee',
        date: '2021-01-01',
        time: '04:14',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 0.01,
        action: 'CustodyFee',
        date: '2021-02-01',
        time: '02:00',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 0.01,
        action: 'CustodyFee',
        date: '2021-03-01',
        time: '03:06',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 0.08,
        action: 'CustodyFee',
        date: '2021-04-01',
        time: '10:01',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 0.08,
        action: 'CustodyFee',
        date: '2021-05-01',
        time: '03:39',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 


      {
        value: 0.08,
        action: 'CustodyFee',
        date: '2021-06-01',
        time: '12:58',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 


      {
        value: 10.00,
        action: 'Fund',
        date: '2021-06-23',
        time: '23:25',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 


      {
        value: 8.00,
        action: 'Fund',
        date: '2021-06-23',
        time: '23:30',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 5.00,
        action: 'Fund',
        date: '2021-06-23',
        time: '23:32',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 


      {
        value: 50.00,
        action: 'Fund',
        date: '2021-06-23',
        time: '23:35',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 10.00,
        action: 'Fund',
        date: '2021-06-29',
        time: '07:53',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 10.00,
        action: 'Fund',
        date: '2021-06-29',
        time: '07:57',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 3.00,
        action: 'Fund',
        date: '2021-06-29',
        time: '08:05',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 0.09,
        action: 'CustodyFee',
        date: '2021-07-01',
        time: '14:44',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 


      {
        value: 0.01,
        action: 'Fund',
        date: '2021-07-02',
        time: '12:13',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 239.62,
        action: 'Fund',
        date: '2021-07-15',
        time: '15:51',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 2.00,
        action: 'Fund',
        date: '2021-07-16',
        time: '07:25',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 5.00,
        action: 'Fund',
        date: '2021-07-16',
        time: '07:27',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 3.02,
        action: 'Fund',
        date: '2021-07-26',
        time: '07:24',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 0.12,
        action: 'CustodyFee',
        date: '2021-08-01',
        time: '15:52',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 5.00,
        action: 'Fund',
        date: '2021-07-27',
        time: '17:49',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 0.12,
        action: 'CustodyFee',
        date: '2021-09-02',
        time: '13:05',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 


      {
        value: 100.10,
        action: 'Fund',
        date: '2021-09-20',
        time: '20:19',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 


      {
        value: 1.00,
        action: 'Fund',
        date: '2021-09-20',
        time: '20:20',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 0.11,
        action: 'CustodyFee',
        date: '2021-10-02',
        time: '06:38',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 0.17,
        action: 'CustodyFee',
        date: '2021-11-03',
        time: '07:19',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 1100.00,
        action: 'Fund',
        date: '2021-11-26',
        time: '17:01',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 


      {
        value: 150.00,
        action: 'Fund',
        date: '2021-11-30',
        time: '17:47',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 


      {
        value: 0.30,
        action: 'CustodyFee',
        date: '2021-12-02',
        time: '09:26',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 


      {
        value: 0.17,
        action: 'Fund',
        date: '2021-12-02',
        time: '19:33',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 


      {
        value: 0.28,
        action: 'CustodyFee',
        date: '2022-01-04',
        time: '05:15',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 0.22,
        action: 'Fund',
        date: '2022-01-04',
        time: '14:55',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 0.25,
        action: 'CustodyFee',
        date: '2022-02-02',
        time: '16:58',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 0.23,
        action: 'CustodyFee',
        date: '2022-03-02',
        time: '10:32',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 


      {
        value: 359.00,
        action: 'Fund',
        date: '2022-03-24',
        time: '15:01',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 


      {
        value: 68.00,
        action: 'Fund',
        date: '2022-03-24',
        time: '15:03',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 


      {
        value: 80.00,
        action: 'Fund',
        date: '2022-03-24',
        time: '15:04',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 


      {
        value: 154.00,
        action: 'Fund',
        date: '2022-03-24',
        time: '15:07',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

     {
        value: 178.00,
        action: 'Fund',
        date: '2022-03-24',
        time: '15:08',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 175.00,
        action: 'Fund',
        date: '2022-03-25',
        time: '16:37',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 0.36,
        action: 'CustodyFee',
        date: '2022-04-02',
        time: '08:06',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 50.00,
        action: 'Fund',
        date: '2022-04-21',
        time: '21:49',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 184.00,
        action: 'Fund',
        date: '2022-04-25',
        time: '15:10',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 680.00,
        action: 'Fund',
        date: '2022-04-25',
        time: '15:12',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 88.00,
        action: 'Fund',
        date: '2022-04-25',
        time: '15:14',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 11.00,
        action: 'Fund',
        date: '2022-04-25',
        time: '15:14',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 986.00,
        action: 'Fund',
        date: '2022-04-25',
        time: '16:09',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 155.00,
        action: 'Fund',
        date: '2022-04-27',
        time: '17:25',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 276.00,
        action: 'Fund',
        date: '2022-04-29',
        time: '22:58',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 19.20,
        action: 'Fund',
        date: '2022-05-02',
        time: '20:31',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 0.55,
        action: 'CustodyFee',
        date: '2022-05-03',
        time: '11:53',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 1500.00,
        action: 'Fund',
        date: '2022-05-06',
        time: '15:37',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 74.00,
        action: 'Fund',
        date: '2022-05-06',
        time: '22:10',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 


      {
        value: 32.00,
        action: 'Fund',
        date: '2022-05-06',
        time: '22:11',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 10.00,
        action: 'Withdraw',
        date: '2022-05-12',
        time: '20:28',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 1.00,
        action: 'Withdraw',
        date: '2022-05-16',
        time: '23:16',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 275.00,
        action: 'Fund',
        date: '2022-05-20',
        time: '17:37',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 20.00,
        action: 'Withdraw',
        date: '2022-05-29',
        time: '20:14',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 5.00,
        action: 'Withdraw',
        date: '2022-06-01',
        time: '19:55',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 


      {
        value: 0.64,
        action: 'CustodyFee',
        date: '2022-06-02',
        time: '12:41',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 120.00,
        action: 'Fund',
        date: '2022-06-08',
        time: '20:45',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 641.00,
        action: 'Fund',
        date: '2022-06-17',
        time: '18:10',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 60.00,
        action: 'Fund',
        date: '2022-06-21',
        time: '17:15',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

     {
        value: 130.00,
        action: 'Fund',
        date: '2022-06-21',
        time: '17:17',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 10.00,
        action: 'Withdraw',
        date: '2022-06-21',
        time: '19:07',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 15.00,
        action: 'Withdraw',
        date: '2022-06-22',
        time: '15:44',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 8.00,
        action: 'Withdraw',
        date: '2022-06-22',
        time: '23:56',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 678.80,
        action: 'Fund',
        date: '2022-06-29',
        time: '21:10',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 


      {
        value: 0.75,
        action: 'CustodyFee',
        date: '2022-07-02',
        time: '09:45',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 33.00,
        action: 'Withdraw',
        date: '2022-07-07',
        time: '21:38',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 20.00,
        action: 'Withdraw',
        date: '2022-07-12',
        time: '18:36',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 526.00,
        action: 'Fund',
        date: '2022-07-13',
        time: '15:55',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 4.00,
        action: 'Withdraw',
        date: '2022-07-13',
        time: '19:27',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 


      {
        value: 10.00,
        action: 'Withdraw',
        date: '2022-07-15',
        time: '19:43',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 10.00,
        action: 'Withdraw',
        date: '2022-07-16',
        time: '15:52',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 


      {
        value: 10.00,
        action: 'Withdraw',
        date: '2022-07-19',
        time: '21:27',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 42.00,
        action: 'Withdraw',
        date: '2022-07-20',
        time: '15:52',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 


     {
        value: 10.00,
        action: 'Withdraw',
        date: '2022-07-21',
        time: '19:53',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 7.00,
        action: 'Withdraw',
        date: '2022-07-22',
        time: '01:39',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 20.00,
        action: 'Withdraw',
        date: '2022-07-23',
        time: '19:20',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 


      {
        value: 75.00,
        action: 'Withdraw',
        date: '2022-07-26',
        time: '14:24',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 131.00,
        action: 'Fund',
        date: '2022-07-27',
        time: '17:39',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 


     {
        value: 10.00,
        action: 'Fund',
        date: '2022-07-27',
        time: '17:40',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 


      {
        value: 20.00,
        action: 'Fund',
        date: '2022-07-28',
        time: '16:58',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 0.61,
        action: 'CustodyFee',
        date: '2022-08-02',
        time: '07:45',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      
      {
        value: 450.00,
        action: 'Fund',
        date: '2022-08-08',
        time: '16:36',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 


      {
        value: 120.00,
        action: 'Fund',
        date: '2022-08-08',
        time: '17:29',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 50.00,
        action: 'Fund',
        date: '2022-08-08',
        time: '17:30',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 3.30,
        action: 'Fund',
        date: '2022-08-08',
        time: '18:06',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 855.00,
        action: 'Fund',
        date: '2022-08-10',
        time: '17:45',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 5.00,
        action: 'Fund',
        date: '2022-08-11',
        time: '10:40',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 6.00,
        action: 'Fund',
        date: '2022-08-11',
        time: '21:38',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 50.00,
        action: 'Fund',
        date: '2022-08-15',
        time: '22:25',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 10.00,
        action: 'Fund',
        date: '2022-08-15',
        time: '22:25',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 

      {
        value: 920.00,
        action: 'Fund',
        date: '2022-08-18',
        time: '16:38',
        createdAt: new Date(),
        updatedAt: new Date(),
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
