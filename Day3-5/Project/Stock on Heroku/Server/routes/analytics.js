const express = require('express');
const db = require('../db/models');
const { asyncHandler } = require('./utils');
const { requireAuth } = require('../auth');


const router = express.Router();
router.use(requireAuth);


 router.get('/users/:userId(\\d+)/info', asyncHandler( async(req, res) => {
    const { QueryTypes } = require('sequelize');
    const userId = parseInt(req.params.userId, 10);
 
    const results = await db.sequelize.query(
       
        `select  "Stocks"."name", "Stocks"."symbol", sum(quantity) as "TotalTransitStock", sum("totalCredit") as "TotalTransitSum", Action from "Transactions" join "Stocks"  on 
         "Transactions"."stockId" = "Stocks" ."id"
         where "Transactions"."userId" = $1
         group by "Stocks".id, "Stocks"."name", "Stocks"."symbol", "Transactions"."action"
         order by  "Stocks".id`,
       
        {
            bind: [userId],
            type: QueryTypes.SELECT
         }

   );
   return res.json({results})     
     
 }));



module.exports = router;