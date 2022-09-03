const express = require('express');
const { check, validationResult } = require('express-validator');
const db = require('../db/models');
const { asyncHandler, handlerValidationErrors } = require('./utils');
const { requireAuth } = require('../auth');

const router = express.Router();
router.use(requireAuth);


const transactionValidators = [
    check('stockId')
      .exists({checkFalsy: true})
      .withMessage('Please provide a value for # Shares')
      .custom(value => {
        return db.Stock.findOne({where: {id: value}})
        .then(stock => {if (!stock) return Promise.reject('The provided stock does not exists')})
      }),
    

    check('quantity')
      .exists({checkFalsy: true})
      .withMessage('Please provide a value for # Shares')
      .isDecimal()
      .withMessage('# Shares must be a decimal value'),

    check('price')
      .exists({checkFalsy: true})
      .withMessage('Please provide a value for Price')
      .isDecimal(),

    check('exchanged')
      .exists({checkFalsy: true})
      .withMessage('Please provide a value for Exchanged')
      .isDecimal(),

    check('fee')
      .exists({checkFalsy: true})
      .withMessage('Please provide a value for Fee')
      .isDecimal(),

    check('totalCredit')
      .exists({checkFalsy: true})
      .withMessage('Please provide a value for TotalCredit')
      .isDecimal(),  

    check('date')
      .exists({checkFalsy: true})
      .withMessage('Please provide a value for Date')
      .isDate(),   

    check('time')
      .exists({checkFalsy: true})
      .withMessage('Please provide a value for Time')

       

]

router.get('/users/:userId(\\d+)/transactions', asyncHandler( async(req, res, next) => {
   
    const userId = parseInt(req.params.userId, 10);
    const transactions = await db.Transaction.findAll(
        { where: {userId: userId},
          include: ['stock'],
          order: [['date', "Desc"], ['time', "Desc"]]
     }
    );
    
    return res.json({ transactions });
}));


router.post('/users/:userId(\\d+)/transaction/add', transactionValidators, handlerValidationErrors, asyncHandler( async (req, res, next) => {
  
  console.log('test');   
  const {stockId, action, quantity, price, exchanged, fee, totalCredit, date, time} = req.body;
  const userId = parseInt(req.params.userId, 10); 
  const transactionData = {userId, stockId, action, quantity, price, exchanged, fee, totalCredit, date, time};
  const transaction = await db.Transaction.create(transactionData);

  return res.status(201).json({transaction, locals: {authenticated: true, firstName: 'Adri'}});
}));


router.get('/users/:userId(\\d+)/stocks/:stockId(\\d+)/transactions', asyncHandler( async(req, res, next) => {
    console.log('jjj1');
    const userId = parseInt(req.params.userId, 10);
    const stockId = parseInt(req.params.stockId, 10);

    const stock = await db.Stock.findAll(
       { where: {id: stockId}}
    );

    const transactions = await db.Transaction.findAll(
        { where: {userId: userId, stockId: stockId},
          order: [['date', "Desc"], ['time', "Desc"]]
     }
    );

    console.log('jjj3');
    
    return res.json({ stock, transactions });
}));


module.exports = router;