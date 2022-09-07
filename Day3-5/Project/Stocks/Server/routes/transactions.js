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
      .withMessage('Please provide a value for Stock')
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
  
  const {stockId, action, quantity, price, exchanged, fee, totalCredit, date, time} = req.body;
  const userId = parseInt(req.params.userId, 10); 
  const transactionData = {userId, stockId, action, quantity, price, exchanged, fee, totalCredit, date, time};
  const transaction = await db.Transaction.create(transactionData);

  return res.status(201).json({transaction, locals: {authenticated: true, firstName: 'Adri'}});
}));

router.post('/transactions/edit/:transactionId(\\d+)', 
transactionValidators, handlerValidationErrors, asyncHandler(async (req, res) => {
   const transactionId = parseInt(req.params.transactionId, 10);


    if (req.errors) {
      return res.status(404).json({"errors": req.errors});
    } else {
      const {userId, stockId, action, quantity, price, exchanged, fee, totalCredit, date, time} = req.body;
      const transaction = {userId, stockId, action, quantity, price, exchanged, fee, totalCredit, date, time};
     
      const transactionToUpdate= await db.Transaction.findByPk(transactionId);
      await transactionToUpdate.update(transaction);
      
      return res.status(200).json({transaction});
  }

}));

router.get('/users/:userId(\\d+)/stocks/:stockId(\\d+)/transactions', asyncHandler( async(req, res, next) => {
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

    return res.json({ stock, transactions });
}));


router.get('/transactions/:transactionId(\\d+)', asyncHandler( async(req, res, next) => {
    const transactionId = parseInt(req.params.transactionId, 10);
    const transaction = await db.Transaction.findAll(
       { where: {id: transactionId},
         include: ['stock']
      }
    );
     
    if (transaction.userId == req.body.userId) {
        return res.json({transaction});
    } else {
       return res.status(401).json({'message': "Transaction is visible just for user who made the transaction"})
    }
   
   
}));


router.delete('/transaction/delete/:transactionId(\\d+)', 
asyncHandler(async (req, res, next) => {

  const transactionId = parseInt(req.params.transactionId, 10);
  const transaction = await db.Transaction.findByPk(transactionId);

  if (transaction) {
      await transaction.destroy();
      return res.status(204).end();
  } else {
       const err = new Error (`There isn\'t a transaction with id ${id} in the database`);
       err.title = 'Transaction not found';
       err.status = 404;
       return next(err);
  }

}));


module.exports = router;