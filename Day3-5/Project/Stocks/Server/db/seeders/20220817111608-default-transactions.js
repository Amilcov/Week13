'use strict';
const bcrypt = require('bcryptjs');
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

    const users = await queryInterface.bulkInsert("Users", 
      [
     
        { firstname: "Adriana", 
          lastname: "Claudia", 
          username: "adriana", 
          email: "amilcov@y.com", 
          password: bcrypt.hashSync('adriana', 10),
          createdAt: new Date(),
          updatedAt: new Date()
       },
        { firstname: "Adriana Demo", 
          lastname: "Claudia", 
          username: "demo", 
          email: "demo@y.com", 
          password: bcrypt.hashSync('demo', 10),
          createdAt: new Date(),
          updatedAt: new Date()
       }

      ], 
      {returning: true}
    );


    const stocks = await queryInterface.bulkInsert("Stocks", 
      [ 
        {
          name: 'Tesla',
          symbol: "TSLA",
          "yearListed": 2010,
          "marketShares": '31.09 M',
          "marketValue": ' 922.32 B',
          info: "Year listed IPO: 29 June 2010",
          createdAt: new Date(),
          updatedAt: new Date()
       },

       {
          name: 'Apple',
          symbol: "AAPL",
          "yearListed": 1980,
          "marketShares": '16.06 B',
          "marketValue": ' 2.72 T',
          info: "Year listed IPO: 12 December 1980",
          createdAt: new Date(),
          updatedAt: new Date()
       },

      {
        name: 'Microsoft',
        symbol: "MSFT",
        "yearListed": 1986,
        "marketShares": '7.46 B',
        "marketValue": '2.16 T',
        info: "Year listed IPO: 13 March 1986",
        createdAt: new Date(),
        updatedAt: new Date()
     },

    {
      name: 'Amazon',
      symbol: "AMZN",
      "yearListed": 1997,
      "marketShares": '10.19 B',
      "marketValue": '1.52 T',
      info: "Year listed IPO: 15 May 1997",
      createdAt: new Date(),
      updatedAt: new Date()

   },
   {
      name: 'Twitter',
      symbol: "TWTR",
      "yearListed": 2013,
      "marketShares": '765.25 M',
      "marketValue": '32.03 B',
      info: "Year listed IPO: 07 November 2013",
      createdAt: new Date(),
      updatedAt: new Date()

   },

   {
      name: 'Oracle',
      symbol: "ORCL",
      "yearListed": 1986,
      "marketShares": '765.25 M',
      "marketValue": '202.295 B',
      info: "Year listed IPO: 12 March 1986",
      createdAt: new Date(),
      updatedAt: new Date()
   },

  ],  {returning: true}
  );

    return await queryInterface.bulkInsert("Transactions", [   



      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 1.00,
        price: 931.00,
        exchanged: 931.00,
        fee: 2.34,
        "totalCredit": 933.34,
        date: '2022-08-15',
        time: '20:48',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 1.00,
        price: 935.00,
        exchanged: 935.00,
        fee: 2.34,
        "totalCredit": 937.34,
        date: '2022-08-15',
        time: '20:33',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Sell",
        quantity: 1.00,
        price: 937.00,
        exchanged: 937.00,
        fee: 2.36,
        "totalCredit": 934.64,
        date: '2022-08-15',
        time: '19:47',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Sell",
        quantity: 1.00,
        price: 881.00,
        exchanged: 881.00,
        fee: 2.22,
        "totalCredit": 878.78,
        date: '2022-08-12',
        time: '18:16',
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 1.00,
        price: 864.50,
        exchanged: 864.50,
        fee: 2.16,
        "totalCredit": 866.66,
        date: '2022-08-11',
        time: '21:40',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 1.00,
        price: 907.00,
        exchanged: 907.00,
        fee: 2.28,
        "totalCredit": 909.28,
        date: '2022-08-08',
        time: '18:11',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 1.00,
        price: 908.00,
        exchanged: 908.00,
        fee: 2.27,
        "totalCredit": 910.27,
        date: '2022-08-08',
        time: '18:11',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 1.00,
        price: 910.00,
        exchanged: 910.00,
        fee: 2.28,
        "totalCredit": 912.28,
        date: '2022-08-08',
        time: '18:07',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Sell",
        quantity: 2.00,
        price: 915.25,
        exchanged: 1830.50,
        fee: 4.58,
        "totalCredit": 1825.92,
        date: '2022-08-08',
        time: '16:40',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 1.00,
        price: 898.39,
        exchanged: 898.39,
        fee: 2.24,
        "totalCredit": 900.63,
        date: '2022-08-08',
        time: '16:38',
        createdAt: new Date(),
        updatedAt: new Date()
      },


      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 1.00,
        price: 897.86,
        exchanged: 897.86,
        fee: 2.24,
        "totalCredit": 900.10,
        date: '2022-08-08',
        time: '16:37',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 1.00,
        price: 924.00,
        exchanged: 924.00,
        fee: 2.31,
        "totalCredit": 926.31,
        date: '2022-08-03',
        time: '21:37',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 1.00,
        price: 925.00,
        exchanged: 925.00,
        fee: 2.32,
        "totalCredit": 927.32,
        date: '2022-08-03',
        time: '21:36',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 1.00,
        price: 927.24,
        exchanged: 927.24,
        fee: 2.32,
        "totalCredit": 929.56,
        date: '2022-08-03',
        time: '21:34',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Sell",
        quantity: 1.00,
        price: 928.00,
        exchanged: 928.00,
        fee: 2.33,
        "totalCredit": 925.67,
        date: '2022-08-03',
        time: '21:17',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Sell",
        quantity: 2.00,
        price: 924.50,
        exchanged: 1849.00,
        fee: 4.66,
        "totalCredit": 1844.34,
        date: '2022-08-03',
        time: '21:17',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Sell",
        quantity: 1.00,
        price: 922.00,
        exchanged: 922.00,
        fee: 2.33,
        "totalCredit": 919.67,
        date: '2022-08-03',
        time: '20:52',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 1.00,
        price: 902.00,
        exchanged: 902.00,
        fee: 2.26,
        "totalCredit": 904.26,
        date: '2022-08-02',
        time: '20:40',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      
     {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 1.00,
        price: 906.00,
        exchanged: 906.00,
        fee: 2.27,
        "totalCredit": 908.27,
        date: '2022-08-02',
        time: '20:40',
        createdAt: new Date(),
        updatedAt: new Date()
      },

     {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 1.00,
        price: 903.00,
        exchanged: 903.00,
        fee: 2.30,
        "totalCredit": 905.30,
        date: '2022-08-02',
        time: '20:33',
        createdAt: new Date(),
        updatedAt: new Date()
      },

          
      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 1.00,
        price: 909.78,
        exchanged: 909.78,
        fee: 2.30,
        "totalCredit": 912.08,
        date: '2022-08-02',
        time: '20:29',
        createdAt: new Date(),
        updatedAt: new Date()
      },

       {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Sell",
        quantity: 1.00,
        price: 919.00,
        exchanged: 919.00,
        fee: 2.31,
        "totalCredit": 916.69,
        date: '2022-08-02',
        time: '19:21',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Sell",
        quantity: 1.00,
        price: 916.60,
        exchanged: 916.60,
        fee: 2.31,
        "totalCredit": 914.19,
        date: '2022-08-02',
        time: '19:20',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Sell",
        quantity: 1.00,
        price: 915.03,
        exchanged: 915.03,
        fee: 2.31,
        "totalCredit": 912.72,
        date: '2022-08-02',
        time: '18:40',
        createdAt: new Date(),
        updatedAt: new Date()
      },
           
      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 1.00,
        price: 892.92,
        exchanged: 892.92,
        fee: 2.23,
        "totalCredit": 895.15,
        date: '2022-08-01',
        time: '22:59',
        createdAt: new Date(),
        updatedAt: new Date()
      },
        
      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 1.00,
        price: 890.00,
        exchanged: 890.00,
        fee: 2.24,
        "totalCredit": 892.24,
        date: '2022-08-01',
        time: '22:24',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 1.00,
        price: 888.95,
        exchanged: 888.00,
        fee: 2.22,
        "totalCredit": 891.17,
        date: '2022-07-29',
        time: '22:41',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Sell",
        quantity: 1.00,
        price: 888.00,
        exchanged: 888.00,
        fee: 2.24,
        "totalCredit": 885.76,
        date: '2022-07-29',
        time: '22:39',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Sell",
        quantity: 1.00,
        price: 877.22,
        exchanged: 877.22,
        fee: 2.19,
        "totalCredit": 875.03,
        date: '2022-07-29',
        time: '21:30',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Sell",
        quantity: 1.00,
        price: 862.80,
        exchanged: 862.80,
        fee: 2.18,
        "totalCredit": 860.62,
        date: '2022-07-29',
        time: '18:41',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Sell",
        quantity: 1.00,
        price: 862.20,
        exchanged: 862.20,
        fee: 2.18,
        "totalCredit": 860.02,
        date: '2022-07-29',
        time: '18:21',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 1.00,
        price: 842.00,
        exchanged: 842.00,
        fee: 2.11,
        "totalCredit": 844.11,
        date: '2022-07-28',
        time: '22:38',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 1.00,
        price: 844.00,
        exchanged: 844.00,
        fee: 2.11,
        "totalCredit": 846.11,
        date: '2022-07-28',
        time: '22:27',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Sell",
        quantity: 3.00,
        price: 843.06,
        exchanged: 2529.18,
        fee: 0.07,
        "totalCredit": 2529.11,
        date: '2022-07-28',
        time: '22:18',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 2.00,
        price: 825.50,
        exchanged: 1651.00,
        fee: 0.00,
        "totalCredit": 1651.00,
        date: '2022-07-28',
        time: '17:18',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 1.00,
        price: 833.00,
        exchanged: 833.00,
        fee: 0.00,
        "totalCredit": 833.00,
        date: '2022-07-28',
        time: '17:04',
        createdAt: new Date(),
        updatedAt: new Date()
    },  
      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Sell",
        quantity: 2.00,
        price: 829.03,
        exchanged: 1658.06,
        fee: 0.05,
        "totalCredit": 1658.01,
        date: '2022-07-28',
        time: '16:55',
        createdAt: new Date(),
        updatedAt: new Date()
    },  
    
       {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Sell",
        quantity: 1.00,
        price: 812.03,
        exchanged: 812.03,
        fee: 0.03,
        "totalCredit": 812.03,
        date: '2022-07-27',
        time: '19:18',
        createdAt: new Date(),
        updatedAt: new Date()
    }, 

    {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 1.00,
        price: 805.00,
        exchanged: 805.00,
        fee: 0.00,
        "totalCredit": 805.00,
        date: '2022-07-27',
        time: '17:42',
        createdAt: new Date(),
        updatedAt: new Date()
    }, 

    {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 1.00,
        price: 817.93,
        exchanged: 817.93,
        fee: 0.00,
        "totalCredit": 817.93,
        date: '2022-07-22',
        time: '18:36',
        createdAt: new Date(),
        updatedAt: new Date()
    }, 

    {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 1.00,
        price: 817.00,
        exchanged: 817.00,
        fee: 0.00,
        "totalCredit": 817.00,
        date: '2022-07-21',
        time: '22:15',
        createdAt: new Date(),
        updatedAt: new Date()
    }, 

    {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Sell",
        quantity: 1.00,
        price: 789.03,
        exchanged: 789.03,
        fee: 0.03,
        "totalCredit": 789.00,
        date: '2022-07-21',
        time: '17:00',
        createdAt: new Date(),
        updatedAt: new Date()
    }, 

    {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 1.00,
        price: 740.00,
        exchanged: 740.00,
        fee: 0.00,
        "totalCredit": 740.00,
        date: '2022-07-20',
        time: '20:04',
        createdAt: new Date(),
        updatedAt: new Date()
    }, 

    {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Sell",
        quantity: 1.00,
        price: 729.03,
        exchanged: 729.03,
        fee: 0.03,
        "totalCredit": 729.00,
        date: '2022-07-19',
        time: '19:20',
        createdAt: new Date(),
        updatedAt: new Date()
    }, 

    {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 1.00,
        price: 712.00,
        exchanged: 712.00,
        fee: 0.00,
        "totalCredit": 712.00,
        date: '2022-07-19',
        time: '17:15',
        createdAt: new Date(),
        updatedAt: new Date()
    }, 
      
    {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Sell",
        quantity: 1.00,
        price: 747.03,
        exchanged: 747.03,
        fee: 0.03,
        "totalCredit": 747.00,
        date: '2022-07-18',
        time: '16:37',
        createdAt: new Date(),
        updatedAt: new Date()
    }, 
    {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Sell",
        quantity: 1.00,
        price: 715.03,
        exchanged: 715.03,
        fee: 0.03,
        "totalCredit": 715.00,
        date: '2022-07-14',
        time: '22:55',
        createdAt: new Date(),
        updatedAt: new Date()
    }, 
      
      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 1.00,
        price: 693.00,
        exchanged: 693.00,
        fee: 0.00,
        "totalCredit": 693.00,
        date: '2022-07-14',
        time: '16:57',
        createdAt: new Date(),
        updatedAt: new Date()
    }, 

   {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Sell",
        quantity: 1.00,
        price: 720.03,
        exchanged: 720.03,
        fee: 0.03,
        "totalCredit": 720.00,
        date: '2022-07-13',
        time: '19:08',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 1.00,
        price: 699.15,
        exchanged: 699.15,
        fee: 0.00,
        "totalCredit": 699.15,
        date: '2022-07-12',
        time: '22:58',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 1.00,
        price: 726.99,
        exchanged: 726.99,
        fee: 0.00,
        "totalCredit": 726.99,
        date: '2022-07-11',
        time: '17:17',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Sell",
        quantity: 1.00,
        price: 740.03,
        exchanged: 740.03,
        fee: 0.03,
        "totalCredit": 740.00,
        date: '2022-07-08',
        time: '16:46',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Sell",
        quantity: 1.00,
        price: 700.03,
        exchanged: 700.03,
        fee: 0.03,
        "totalCredit": 700.00,
        date: '2022-07-06',
        time: '22:22',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 1.00,
        price: 685.00,
        exchanged: 685.00,
        fee: 0.00,
        "totalCredit": 685.00,
        date: '2022-07-06',
        time: '17:37',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Sell",
        quantity: 1.00,
        price: 691.03,
        exchanged: 691.03,
        fee: 0.03,
        "totalCredit": 691.00,
        date: '2022-07-05',
        time: '20:36',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 1.00,
        price: 682.00,
        exchanged: 682.00,
        fee: 0.00,
        "totalCredit": 682.00,
        date: '2022-07-05',
        time: '19:39',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Sell",
        quantity: 1.00,
        price: 685.53,
        exchanged: 685.53,
        fee: 0.03,
        "totalCredit": 685.50,
        date: '2022-07-01',
        time: '16:47',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 1.00,
        price: 680.00,
        exchanged: 680.00,
        fee: 0.00,
        "totalCredit": 680.00,
        date: '2022-06-29',
        time: '21:20',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 1.00,
        price: 725.00,
        exchanged: 725.00,
        fee: 0.00,
        "totalCredit": 725.00,
        date: '2022-06-28',
        time: '18:10',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Sell",
        quantity: 1.00,
        price: 749.03,
        exchanged: 749.03,
        fee: 0.03,
        "totalCredit": 749.00,
        date: '2022-06-28',
        time: '16:49',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 1.00,
        price: 738.50,
        exchanged: 738.50,
        fee: 0.00,
        "totalCredit": 738.50,
        date: '2022-06-22',
        time: '17:40',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Sell",
        quantity: 1.00,
        price: 735.03,
        exchanged: 735.03,
        fee: 0.03,
        "totalCredit": 735.00,
        date: '2022-06-22',
        time: '17:24',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 1.00,
        price: 722.42,
        exchanged: 722.42,
        fee: 0.00,
        "totalCredit": 722.42,
        date: '2022-06-21',
        time: '17:53',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Sell",
        quantity: 0.02,
        price: 708.50,
        exchanged: 14.17,
        fee: 0.01,
        "totalCredit": 14.16,
        date: '2022-05-26',
        time: '22:49',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Sell",
        quantity: 0.40,
        price: 707.60,
        exchanged: 283.04,
        fee: 0.02,
        "totalCredit": 283.02,
        date: '2022-05-26',
        time: '22:48',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 0.42837509,
        price: 683.98,
        exchanged: 293.00,
        fee: 0.00,
        "totalCredit": 293.00,
        date: '2022-05-20',
        time: '17:38',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 1.00,
        price: 867.00,
        exchanged: 867.00,
        fee: 0.00,
        "totalCredit": 867.00,
        date: '2022-05-06',
        time: '22:58',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

        {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 1.00,
        price: 865.00,
        exchanged: 865.00,
        fee: 0.00,
        "totalCredit": 865.00,
        date: '2022-05-06',
        time: '22:55',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 2.00,
        price: 978.00,
        exchanged: 1956.00,
        fee: 0.00,
        "totalCredit": 1956.00,
        date: '2022-04-26',
        time: '16:42',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Sell",
        quantity: 2.00,
        price: 1003.00,
        exchanged: 2006.00,
        fee: 0.02,
        "totalCredit": 2005.98,
        date: '2022-04-25',
        time: '17:11',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 2.00,
        price: 978.00,
        exchanged: 1956.00,
        fee: 0.00,
        "totalCredit": 1956.00,
        date: '2022-04-25',
        time: '16:30',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 2.00,
        price: 1099.00,
        exchanged: 2198.00,
        fee: 0.00,
        "totalCredit": 1100.00,
        date: '2022-04-05',
        time: '19:02',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Sell",
        quantity: 1.00,
        price: 1110.02,
        exchanged: 1102.02,
        fee: 0.02,
        "totalCredit": 1100.00,
        date: '2022-04-04',
        time: '17:34',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Sell",
        quantity: 1.00,
        price: 1079.01,
        exchanged: 1097.01,
        fee: 0.02,
        "totalCredit": 1096.99,
        date: '2022-04-04',
        time: '17:22',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 0.10,
        price: 1079.00,
        exchanged: 107.90,
        fee: 0.00,
        "totalCredit": 107.90,
        date: '2022-04-04',
        time: '16:55',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 1.00,
        price: 1087.00,
        exchanged: 1087.00,
        fee: 0.00,
        "totalCredit": 1087.00,
        date: '2022-03-31',
        time: '22:26',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Sell",
        quantity: 1.00,
        price: 1104.05,
        exchanged: 1104.05,
        fee: 0.02,
        "totalCredit": 1104.03,
        date: '2022-03-30',
        time: '19:48',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 1.00,
        price: 1102.00,
        exchanged: 1102.00,
        fee: 0.00,
        "totalCredit": 1102.00,
        date: '2022-03-30',
        time: '19:37',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Sell",
        quantity: 2.00,
        price: 1103.00,
        exchanged: 2206.00,
        fee: 0.02,
        "totalCredit": 2205.98,
        date: '2022-03-30',
        time: '18:46',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 0.99969044,
        price: 1098.34,
        exchanged: 1098.00,
        fee: 0.00,
        "totalCredit": 1098.00,
        date: '2022-03-30',
        time: '18:25',
        createdAt: new Date(),
        updatedAt: new Date()
      },  

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 1,
        price: 1100.00,
        exchanged: 1100.00,
        fee: 0.00,
        "totalCredit": 1100.00,
        date: '2022-03-30',
        time: '18:25',
        createdAt: new Date(),
        updatedAt: new Date()
      },  
      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Sell",
        quantity: 1,
        price: 1091.07,
        exchanged: 1091.07,
        fee: 0.02,
        "totalCredit": 1091.05,
        date: '2022-03-30',
        time: '16:30',
        createdAt: new Date(),
        updatedAt: new Date()
      },    

   {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Sell",
        quantity: 1,
        price: 1084.01,
        exchanged: 1084.01,
        fee: 0.02,
        "totalCredit": 1083.99,
        date: '2022-03-28',
        time: '18:58',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 0.87407715,
        price: 1010.46,
        exchanged: 883.22,
        fee: 0.00,
        "totalCredit": 883.22,
        date: '2022-03-24',
        time: '15:30',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      
      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 0.99980107,
        price: 1156.23,
        exchanged: 1156.00,
        fee: 0.00,
        "totalCredit": 1156.00,
        date: '2022-01-04',
        time: '17:57',
        createdAt: new Date(),
        updatedAt: new Date()
      },  

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Sell",
        quantity: 1.00,
        price: 1200.00,
        exchanged: 1200.00,
        fee: 0.02,
        "totalCredit": 1199.98,
        date: '2022-01-04',
        time: '16:48',
        createdAt: new Date(),
        updatedAt: new Date()
      },    

     {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 1.00087446,
        price: 1154.99,
        exchanged: 1156.00,
        fee: 0.00,
        "totalCredit": 1156.00,
        date: '2021-11-30',
        time: '17:47',
        createdAt: new Date(),
        updatedAt: new Date()
      },   

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Sell",
        quantity: 1,
        price: 1135.00,
        exchanged: 1135.00,
        fee: 0.02,
        "totalCredit": 1134.98,
        date: '2021-11-29',
        time: '19:23',
        createdAt: new Date(),
        updatedAt: new Date()
      },  

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 1.0021318,
        price: 1097.66,
        exchanged: 1100.00,
        fee: 0.00,
        "totalCredit": 1110.00,
        date: '2021-11-26',
        time: '19:09',
        createdAt: new Date(),
        updatedAt: new Date()
      },  

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 0.13464057,
        price: 816.99,
        exchanged: 110.00,
        fee: 0.00,
        "totalCredit": 110.00,
        date: '2021-10-14',
        time: '18:17',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 0.12782983,
        price: 782.29,
        exchanged: 100.00,
        fee: 0.00,
        "totalCredit": 100.00,
        date: '2021-10-08',
        time: '19:02',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Sell",
        quantity: 0.12582573,
        price: 794.75,
        exchanged: 100.00,
        fee: 0.01,
        "totalCredit": 99.99,
        date: '2021-09-27',
        time: '20:55',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Sell",
        quantity: 0.13267174,
        price: 753.74,
        exchanged: 100.00,
        fee: 0.01,
        "totalCredit": 99.99,
        date: '2021-09-23',
        time: '16:48',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Sell",
        quantity: 0.13478758,
        price: 742.65,
        exchanged: 100.10,
        fee: 0.01,
        "totalCredit": 100.09,
        date: '2021-09-21',
        time: '19:26',
        createdAt: new Date(),
        updatedAt: new Date()
      },

        {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 0.13826146,
        price: 730.50,
        exchanged: 101.00,
        fee: 0.00,
        "totalCredit": 101.00,
        date: '2021-09-20',
        time: '20:20',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 0.013451708,
        price: 743.40,
        exchanged: 100.00,
        fee: 0.00,
        "totalCredit": 100.00,
        date: '2021-09-10',
        time: '22:25',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Sell",
        quantity: 0.13199577,
        price: 757.60,
        exchanged: 100.00,
        fee: 0.01,
        "totalCredit": 99.99,
        date: '2021-09-10',
        time: '16:51',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 0.01931993,
        price: 647.00,
        exchanged: 12.50,
        fee: 0.00,
        "totalCredit": 12.50,
        date: '2021-07-16',
        time: '19:06',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 0.018213,
        price: 658.87,
        exchanged: 12.00,
        fee: 0.00,
        "totalCredit": 12.00,
        date: '2021-07-15',
        time: '16:30',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 0.52123511,
        price: 479.63,
        exchanged: 250.00,
        fee: 0.00,
        "totalCredit": 250.00,
        date: '2020-08-31',
        time: '19:26',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 0.1,
        price: 577.50,
        exchanged: 57.57,
        fee: 0.00,
        "totalCredit": 57.57,
        date: '2020-01-23',
        time: '17:00',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
 
     //APPLE
     {
        "userId": users[0].id,
        "stockId": stocks[1].id,
        action: "Buy",
        quantity: 0.0123,
        price: 318.70,
        exchanged: 3.92,
        fee: 0.00,
        "totalCredit": 3.92,
        date: '2020-01-23',
        time: '21:01',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[1].id,
        action: "Dividend",
        quantity: 1,
        price: 0.01,
        exchanged: 0.01,
        fee: 0.00,
        "totalCredit": 0.01,
        date: '2020-02-14',
        time: '00:00',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

       {
        "userId": users[0].id,
        "stockId": stocks[1].id,
        action: "Dividend",
        quantity: 1,
        price: 0.01,
        exchanged: 0.01,
        fee: 0.00,
        "totalCredit": 0.01,
        date: '2020-05-15',
        time: '00:00',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

       {
        "userId": users[0].id,
        "stockId": stocks[1].id,
        action: "Dividend",
        quantity: 1,
        price: 0.01,
        exchanged: 0.01,
        fee: 0.00,
        "totalCredit": 0.01,
        date: '2020-08-14',
        time: '00:00',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

       {
        "userId": users[0].id,
        "stockId": stocks[1].id,
        action: "Buy",
        quantity: 0.07673419,
        price: 130.32,
        exchanged: 10,
        fee: 0.00,
        "totalCredit": 10,
        date: '2020-08-31',
        time: '20:15',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[1].id,
        action: "Dividend",
        quantity: 1,
        price: 0.03,
        exchanged: 0.03,
        fee: 0.00,
        "totalCredit": 0.03,
        date: '2020-11-13',
        time: '00:00',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[1].id,
        action: "Dividend",
        quantity: 1,
        price: 0.03,
        exchanged: 0.03,
        fee: 0.00,
        "totalCredit": 0.03,
        date: '2021-02-15',
        time: '00:00',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[1].id,
        action: "Dividend",
        quantity: 1,
        price: 0.03,
        exchanged: 0.03,
        fee: 0.00,
        "totalCredit": 0.03,
        date: '2021-05-14',
        time: '00:00',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[1].id,
        action: "Buy",
        quantity: 1.00556412,
        price: 149.17,
        exchanged: 150,
        fee: 0.00,
        "totalCredit": 150.00,
        date: '2021-08-15',
        time: '16:30',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[1].id,
        action: "Dividend",
        quantity: 1,
        price: 0.25,
        exchanged: 0.25,
        fee: 0.03,
        "totalCredit": 0.22,
        date: '2021-08-13',
        time: '00:00',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[1].id,
        action: "Dividend",
        quantity: 1,
        price: 0.25,
        exchanged: 0.25,
        fee: 0.03,
        "totalCredit": 0.22,
        date: '2021-11-17',
        time: '00:00',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[1].id,
        action: "Dividend",
        quantity: 1,
        price: 0.25,
        exchanged: 0.25,
        fee: 0.03,
        "totalCredit": 0.22,
        date: '2022-02-15',
        time: '07:40',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[1].id,
        action: "Buy",
        quantity: 1.000097237,
        price: 174.83,
        exchanged: 175,
        fee: 0.00,
        "totalCredit": 175,
        date: '2022-03-25',
        time: '16:37',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[1].id,
        action: "Sell",
        quantity: 1.000028161,
        price: 177.55,
        exchanged: 177.60,
        fee: 0.01,
        "totalCredit": 177.59,
        date: '2022-03-29',
        time: '18:21',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[1].id,
        action: "Buy",
        quantity: 0.99994331,
        price: 176.41,
        exchanged: 176.40,
        fee: 0.00,
        "totalCredit": 176.40,
        date: '2022-03-31',
        time: '22:28',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[1].id,
        action: "Sell",
        quantity: 1,
        price: 177.51,
        exchanged: 177.51,
        fee: 0.01,
        "totalCredit": 177.50,
        date: '2022-04-04',
        time: '16:56',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[1].id,
        action: "Sell",
        quantity: 1,
        price: 178.40,
        exchanged: 178.40,
        fee: 0.01,
        "totalCredit": 178.39,
        date: '2022-04-06',
        time: '22:31',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[1].id,
        action: "Buy",
        quantity: 1.00040904,
        price: 171.13,
        exchanged: 171.20,
        fee: 0.00,
        "totalCredit": 171.20,
        date: '2022-04-06',
        time: '20:40',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[1].id,
        action: "Buy",
        quantity: 1,
        price: 166.43,
        exchanged: 166.43,
        fee: 0.00,
        "totalCredit": 166.43,
        date: '2022-04-21',
        time: '21:50',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[1].id,
        action: "Buy",
        quantity: 1,
        price: 156.50,
        exchanged: 156.50,
        fee: 0.00,
        "totalCredit": 156.50,
        date: '2022-04-27',
        time: '22:08',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[1].id,
        action: "Sell",
        quantity: 1,
        price: 159.50,
        exchanged: 159.50,
        fee: 0.01,
        "totalCredit": 159.49,
        date: '2022-04-28',
        time: '16:30',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[1].id,
        action: "Buy",
        quantity: 1,
        price: 154.80,
        exchanged: 154.80,
        fee: 0.00,
        "totalCredit": 154.80,
        date: '2022-05-02',
        time: '20:27',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[1].id,
        action: "Buy",
        quantity: 1,
        price: 154.45,
        exchanged: 154.45,
        fee: 0.00,
        "totalCredit": 154.45,
        date: '2022-05-02',
        time: '20:32',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[1].id,
        action: "Sell",
        quantity: 2,
        price: 158.06,
        exchanged: 316.12,
        fee: 0.01,
        "totalCredit": 316.11,
        date: '2022-05-03',
        time: '16:30',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[1].id,
        action: "Buy",
        quantity: 2,
        price: 156.30,
        exchanged: 312.60,
        fee: 0.00,
        "totalCredit": 312.60,
        date: '2022-05-05',
        time: '21:33',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[1].id,
        action: "Sell",
        quantity: 2,
        price: 158.60,
        exchanged: 317.20,
        fee: 0.01,
        "totalCredit": 317.19,
        date: '2022-05-06',
        time: '18:15',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[1].id,
        action: "Buy",
        quantity: 0.99567099,
        price: 154.77,
        exchanged: 154.10,
        fee: 0.00,
        "totalCredit": 154.10,
        date: '2022-05-09',
        time: '16:34',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[1].id,
        action: "Sell",
        quantity: 1,
        price: 156.11,
        exchanged: 156.11,
        fee: 0.01,
        "totalCredit": 156.10,
        date: '2022-05-10',
        time: '17:01',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[1].id,
        action: "Buy",
        quantity: 1,
        price: 152.00,
        exchanged: 152.00,
        fee: 0.00,
        "totalCredit": 152.00,
        date: '2022-05-11',
        time: '16:34',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[1].id,
        action: "Dividend",
        quantity: 1,
        price: 0.95,
        exchanged: 0.95,
        fee: 0.10,
        "totalCredit": 0.85,
        date: '2022-05-16',
        time: '08:04',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[1].id,
        action: "Buy",
        quantity: 1,
        price: 146.34,
        exchanged: 146.34,
        fee: 0.00,
        "totalCredit": 146.34,
        date: '2022-05-27',
        time: '16:37',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[1].id,
        action: "Sell",
        quantity: 1,
        price: 148.30,
        exchanged: 148.30,
        fee: 0.02,
        "totalCredit": 148.28,
        date: '2022-05-27',
        time: '20:42',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[1].id,
        action: "Buy",
        quantity: 1,
        price: 148.23,
        exchanged: 148.23,
        fee: 0.00,
        "totalCredit": 148.23,
        date: '2022-06-02',
        time: '16:45',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[1].id,
        action: "Sell",
        quantity: 1,
        price: 150.02,
        exchanged: 150.02,
        fee: 0.02,
        "totalCredit": 150.00,
        date: '2022-06-02',
        time: '19:19',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 


      {
        "userId": users[0].id,
        "stockId": stocks[1].id,
        action: "Buy",
        quantity: 1,
        price: 136.32,
        exchanged: 136.32,
        fee: 0.00,
        "totalCredit": 136.32,
        date: '2022-06-21',
        time: '17:17',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[1].id,
        action: "Sell",
        quantity: 1,
        price: 138.03,
        exchanged: 138.03,
        fee: 0.02,
        "totalCredit": 138.01,
        date: '2022-05-09',
        time: '16:34',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

        {
        "userId": users[0].id,
        "stockId": stocks[1].id,
        action: "Sell",
        quantity: 1,
        price: 150.73,
        exchanged: 150.73,
        fee: 0.02,
        "totalCredit": 150.71,
        date: '2022-06-19',
        time: '22:54',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[1].id,
        action: "Dividend",
        quantity: 1,
        price: 0.49,
        exchanged: 0.49,
        fee: 0.05,
        "totalCredit": 0.49,
        date: '2022-08-16',
        time: '09:47',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 



      //Microsoft
    {
        "userId": users[0].id,
        "stockId": stocks[2].id,
        action: "Buy",
        quantity: 0.10,
        price: 166.30,
        exchanged: 16.63,
        fee: 0.00,
        "totalCredit": 16.63,
        date: '2020-01-23',
        time: '17:05',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[2].id,
        action: "Dividend",
        quantity: 1,
        price: 0.05,
        exchanged: 0.05,
        fee: 0.01,
        "totalCredit": 0.04,
        date: '2020-03-16',
        time: '07:11',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

       {
        "userId": users[0].id,
        "stockId": stocks[2].id,
        action: "Dividend",
        quantity: 1,
        price: 0.05,
        exchanged: 0.05,
        fee: 0.01,
        "totalCredit": 0.04,
        date: '2020-06-12',
        time: '08:30',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[2].id,
        action: "Dividend",
        quantity: 1,
        price: 0.05,
        exchanged: 0.05,
        fee: 0.01,
        "totalCredit": 0.04,
        date: '2020-09-11',
        time: '09:34',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
          

      {
        "userId": users[0].id,
        "stockId": stocks[2].id,
        action: "Dividend",
        quantity: 1,
        price: 0.06,
        exchanged: 0.06,
        fee: 0.01,
        "totalCredit": 0.05,
        date: '2020-12-11',
        time: '08:47',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        "userId": users[0].id,
        "stockId": stocks[2].id,
        action: "Dividend",
        quantity: 1,
        price: 0.06,
        exchanged: 0.06,
        fee: 0.01,
        "totalCredit": 0.05,
        date: '2021-03-12',
        time: '07:24',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[2].id,
        action: "Dividend",
        quantity: 1,
        price: 0.06,
        exchanged: 0.06,
        fee: 0.01,
        "totalCredit": 0.05,
        date: '2021-06-11',
        time: '07:24',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[2].id,
        action: "Dividend",
        quantity: 1,
        price: 0.06,
        exchanged: 0.06,
        fee: 0.01,
        "totalCredit": 0.05,
        date: '2020-09-10',
        time: '07:32',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[2].id,
        action: "Dividend",
        quantity: 1,
        price: 0.06,
        exchanged: 0.06,
        fee: 0.01,
        "totalCredit": 0.05,
        date: '2021-12-10',
        time: '11:49',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[2].id,
        action: "Dividend",
        quantity: 1,
        price: 0.06,
        exchanged: 0.06,
        fee: 0.01,
        "totalCredit": 0.05,
        date: '2022-03-11',
        time: '07:49',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      
      {
        "userId": users[0].id,
        "stockId": stocks[2].id,
        action: "Buy",
        quantity: 2,
        price: 311.50,
        exchanged: 623,
        fee: 0.00,
        "totalCredit": 623,
        date: '2022-06-12',
        time: '17:05',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[2].id,
        action: "Sell",
        quantity: 2,
        price: 313.69,
        exchanged: 627.38,
        fee: 0.01,
        "totalCredit": 627.37,
        date: '2022-04-04',
        time: '16:52',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[2].id,
        action: "Buy",
        quantity: 2,
        price: 309.99,
        exchanged: 619.98,
        fee: 0.00,
        "totalCredit": 619.98,
        date: '2022-04-05',
        time: '22:50',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[2].id,
        action: "Buy",
        quantity: 1.000020165,
        price: 297.54,
        exchanged: 297.60,
        fee: 0.00,
        "totalCredit": 297.60,
        date: '2022-04-06',
        time: '20:03',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

        {
        "userId": users[0].id,
        "stockId": stocks[2].id,
        action: "Buy",
        quantity: 1.00155476,
        price: 276.57,
        exchanged: 277.00,
        fee: 0.00,
        "totalCredit": 277.00,
        date: '2022-04-29',
        time: '22:59',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[2].id,
        action: "Sell",
        quantity: 1,
        price: 280.01,
        exchanged: 280.01,
        fee: 0.01,
        "totalCredit": 280.00,
        date: '2022-05-02',
        time: '20:21',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

        {
        "userId": users[0].id,
        "stockId": stocks[2].id,
        action: "Buy",
        quantity: 1,
        price: 281.00,
        exchanged: 281.00,
        fee: 0.00,
        "totalCredit": 281.00,
        date: '2022-05-04',
        time: '21:07',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 


      {
        "userId": users[0].id,
        "stockId": stocks[2].id,
        action: "Sell",
        quantity: 1,
        price: 281.00,
        exchanged: 283.00,
        fee: 0.01,
        "totalCredit": 282.99,
        date: '2022-05-04',
        time: '21:43',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        "userId": users[0].id,
        "stockId": stocks[2].id,
        action: "Buy",
        quantity: 1,
        price: 279.00,
        exchanged: 279.00,
        fee: 0.00,
        "totalCredit": 279.00,
        date: '2022-05-05',
        time: '17:11',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[2].id,
        action: "Dividend",
        quantity: 1,
        price: 2.54,
        exchanged: 2.54,
        fee: 0.25,
        "totalCredit": 2.29,
        date: '2022-06-10',
        time: '07:18',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 


      {
        "userId": users[0].id,
        "stockId": stocks[2].id,
        action: "Sell",
        quantity: 1,
        price: 281.02,
        exchanged: 281.02,
        fee: 0.02,
        "totalCredit": 281.00,
        date: '2020-07-29',
        time: '17:30',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 


      //Amazon
      {
        "userId": users[0].id,
        "stockId": stocks[3].id,
        action: "Buy",
        quantity: 0.01,
        price: 1881.00,
        exchanged: 18.81,
        fee: 0.00,
        "totalCredit": 18.81,
        date: '2020-01-23',
        time: '17:02',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      
      {
        "userId": users[0].id,
        "stockId": stocks[3].id,
        action: "Buy",
        quantity: 0.01,
        price: 3322.86,
        exchanged: 5.00,
        fee: 0.00,
        "totalCredit": 5.00,
        date: '2021-08-27',
        time: '17:45',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[3].id,
        action: "Buy",
        quantity: 2,
        price: 125.19,
        exchanged: 250.38,
        fee: 0.00,
        "totalCredit": 250.38,
        date: '2022-06-06',
        time: '19:44',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 


      {
        "userId": users[0].id,
        "stockId": stocks[3].id,
        action: "Buy",
        quantity: 1,
        price: 121.16,
        exchanged: 121.16,
        fee: 0.00,
        "totalCredit": 121.16,
        date: '2022-06-08',
        time: '20:45',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[3].id,
        action: "Sell",
        quantity: 1,
        price: 123.02,
        exchanged: 123.02,
        fee: 0.02,
        "totalCredit": 123.00,
        date: '2022-07-20',
        time: '17:59',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[0].id,
        "stockId": stocks[3].id,
        action: "Sell",
        quantity: 1,
        price: 137.10,
        exchanged: 137.10,
        fee: 1.04,
        "totalCredit": 136.06,
        date: '2022-07-29',
        time: '16:50',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

      {
        "userId": users[1].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 2,
        price: 273.86,
        exchanged: 547.72,
        fee: 0.00,
        "totalCredit": 547.72,
        date: '2022-09-02',
        time: '19:30',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 


      {
        "userId": users[1].id,
        "stockId": stocks[0].id,
        action: "Buy",
        quantity: 2,
        price: 282.85,
        exchanged: 565.70,
        fee: 0.02,
        "totalCredit": 565.72,
        date: '2022-09-07',
        time: '17:30',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

     {
        "userId": users[1].id,
        "stockId": stocks[0].id,
        action: "Sell",
        quantity: 1,
        price: 292.12,
        exchanged: 292.12,
        fee: 0.01,
        "totalCredit": 292.13,
        date: '2022-09-09',
        time: '16:30',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 

     
    {
        "userId": users[1].id,
        "stockId": stocks[1].id,
        action: "Buy",
        quantity: 1,
        price: 154.77,
        exchanged: 154.77,
        fee: 0.00,
        "totalCredit": 154.77,
        date: '2022-05-09',
        time: '16:34',
        createdAt: new Date(),
        updatedAt: new Date()
    },  

    {
        "userId": users[1].id,
        "stockId": stocks[1].id,
        action: "Sell",
        quantity: 1,
        price: 156.11,
        exchanged: 156.11,
        fee: 0.01,
        "totalCredit": 156.12,
        date: '2022-05-10',
        time: '17:01',
        createdAt: new Date(),
        updatedAt: new Date()
    },  

    {
        "userId": users[1].id,
        "stockId": stocks[1].id,
        action: "Buy",
        quantity: 1,
        price: 152.00,
        exchanged: 152.00,
        fee: 0.00,
        "totalCredit": 152.00,
        date: '2022-05-11',
        time: '16:34',
        createdAt: new Date(),
        updatedAt: new Date()
    },  

    {
        "userId": users[1].id,
        "stockId": stocks[1].id,
        action: "Dividend",
        quantity: 1,
        price: 0.85,
        exchanged: 0.85,
        fee: 0.01,
        "totalCredit": 0.84,
        date: '2022-05-16',
        time: '08:04',
        createdAt: new Date(),
        updatedAt: new Date()
    },  
 
   
    {
        "userId": users[1].id,
        "stockId": stocks[1].id,
        action: "Buy",
        quantity: 2,
        price: 157.37,
        exchanged: 157.37,
        fee: 0.01,
        "totalCredit": 314.75,
        date: '2022-09-10',
        time: '22:59',
        createdAt: new Date(),
        updatedAt: new Date()
    },  

    {
        "userId": users[1].id,
        "stockId": stocks[2].id,
        action: "Buy",
        quantity: 2,
        price: 281.00,
        exchanged: 281.00,
        fee: 0.01,
        "totalCredit": 281.01,
        date: '2022-05-04',
        time: '21:07',
        createdAt: new Date(),
        updatedAt: new Date()
    },  

    {
        "userId": users[1].id,
        "stockId": stocks[2].id,
        action: "Buy",
        quantity: 2,
        price: 279.00,
        exchanged: 279.00,
        fee: 0.01,
        "totalCredit": 279.01,
        date: '2022-05-05',
        time: '17:07',
        createdAt: new Date(),
        updatedAt: new Date()
    },  

    {
        "userId": users[1].id,
        "stockId": stocks[2].id,
        action: "Dividend",
        quantity: 1,
        price: 0.45,
        exchanged: 0.45,
        fee: 0.01,
        "totalCredit": 0.44,
        date: '2022-06-10',
        time: '07:18',
        createdAt: new Date(),
        updatedAt: new Date()
    },  

    {
        "userId": users[1].id,
        "stockId": stocks[2].id,
        action: "Sell",
        quantity: 1,
        price: 281.02,
        exchanged: 281.02,
        fee: 0.01,
        "totalCredit": 281.01,
        date: '2022-06-29',
        time: '17:30',
        createdAt: new Date(),
        updatedAt: new Date()
    },  

    {
        "userId": users[1].id,
        "stockId": stocks[3].id,
        action: "Buy",
        quantity: 1,
        price: 138.88,
        exchanged: 138.88,
        fee: 0.01,
        "totalCredit": 138.89,
        date: '2022-08-23',
        time: '15:30',
        createdAt: new Date(),
        updatedAt: new Date()
    }, 

    {
        "userId": users[1].id,
        "stockId": stocks[3].id,
        action: "Buy",
        quantity: 1,
        price: 133.27,
        exchanged: 133.27,
        fee: 0.01,
        "totalCredit": 133.28,
        date: '2022-08-30',
        time: '14:30',
        createdAt: new Date(),
        updatedAt: new Date()
    }, 

    {
        "userId": users[1].id,
        "stockId": stocks[3].id,
        action: "Dividend",
        quantity: 1,
        price: 0.26,
        exchanged: 0.26,
        fee: 0.02,
        "totalCredit": 0.24,
        date: '2022-09-06',
        time: '10:08',
        createdAt: new Date(),
        updatedAt: new Date()
    }, 

    {
        "userId": users[1].id,
        "stockId": stocks[3].id,
        action: "Sell",
        quantity: 1,
        price: 133.19,
        exchanged: 133.19,
        fee: 0.01,
        "totalCredit": 133.18,
        date: '2022-09-09',
        time: '18:08',
        createdAt: new Date(),
        updatedAt: new Date()
    }, 


    {
        "userId": users[1].id,
        "stockId": stocks[4].id,
        action: "Buy",
        quantity: 1,
        price: 44.44,
        exchanged: 44.44,
        fee: 0.01,
        "totalCredit": 44.43,
        date: '2022-04-13',
        time: '14:05',
        createdAt: new Date(),
        updatedAt: new Date()
    }, 

    {
        "userId": users[1].id,
        "stockId": stocks[4].id,
        action: "Sell",
        quantity: 1,
        price: 44.90,
        exchanged: 44.90,
        fee: 0.01,
        "totalCredit": 44.89,
        date: '2022-04-18',
        time: '14:05',
        createdAt: new Date(),
        updatedAt: new Date()
    }, 

    {
        "userId": users[1].id,
        "stockId": stocks[4].id,
        action: "Buy",
        quantity: 2,
        price: 49.15,
        exchanged: 98.30,
        fee: 0.03,
        "totalCredit": 98.33,
        date: '2022-04-28',
        time: '18:40',
        createdAt: new Date(),
        updatedAt: new Date()
    }, 

    {
        "userId": users[1].id,
        "stockId": stocks[4].id,
        action: "Dividend",
        quantity: 1,
        price: 0.17,
        exchanged: 0.17,
        fee: 0.01,
        "totalCredit": 0.16,
        date: '2022-07-12',
        time: '19:34',
        createdAt: new Date(),
        updatedAt: new Date()
    }, 
 
    {
        "userId": users[1].id,
        "stockId": stocks[5].id,
        action: "Buy",
        quantity: 3,
        price: 71.13,
        exchanged: 213.39,
        fee: 0.01,
        "totalCredit": 213.38,
        date: '2022-08-30',
        time: '17:30',
        createdAt: new Date(),
        updatedAt: new Date()
    }, 


    {
        "userId": users[1].id,
        "stockId": stocks[5].id,
        action: "Buy",
        quantity: 2,
        price: 73.73,
        exchanged: 156.46,
        fee: 0.01,
        "totalCredit": 156.47,
        date: '2022-09-02',
        time: '15:30',
        createdAt: new Date(),
        updatedAt: new Date()
    }, 

    {
        "userId": users[1].id,
        "stockId": stocks[5].id,
        action: "Dividend",
        quantity: 1,
        price: 0.02,
        exchanged: 0.02,
        fee: 0.01,
        "totalCredit": 0.19,
        date: '2022-09-08',
        time: '11:30',
        createdAt: new Date(),
        updatedAt: new Date()
    }, 

    {
        "userId": users[1].id,
        "stockId": stocks[5].id,
        action: "Sell",
        quantity: 3,
        price: 75.78,
        exchanged: 217.34,
        fee: 0.01,
        "totalCredit": 217.33,
        date: '2022-09-10',
        time: '19:30',
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
