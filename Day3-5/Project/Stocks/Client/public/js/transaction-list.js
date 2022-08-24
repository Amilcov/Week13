document.addEventListener('DOMContentLoaded', async() => {
  
    try {

      token = localStorage.getItem("STOCKS_ACCESS_TOCKEN");
      userId = localStorage.getItem("STOCKS_CURRENT_USER_ID");

      const res = await fetch(`http://localhost:8081/users/${userId}/transactions`, {
           headers: {
            Authorization: `Bearer ${token}`
           }
      });


      if(res.status === 401) {
        window.location.href = '/login';
        return;
      };

      const { transactions } = await res.json();



      const transactionsConatiner = document.querySelector('.transactions-container');

      
      const transactionsHTML = transactions.map (({id, stock, action, quantity, price, exchanged, fee, totalCredit , date, time}) => 
      {  
        const classAction = action === 'Buy' ? 'buy' : action === 'Sell' ? 'sell': 'dividend';
        let totalCreditDisplayed = displayNum(totalCredit);
        totalCreditDisplayed = action === 'Buy' ?  "-" + totalCreditDisplayed : "+" + totalCreditDisplayed;
        const timeDisplayed = time.toLocaleString().substr(0,5);
        const feeDisplayed = fee == 0 ? '0' : fee;

        return ` <tr class=${classAction} > 
             <td> ${stock.symbol} </td>
             <td> ${action} </td>
             <td> ${quantity} </td>
             <td class="text-right"> ${displayNum(price)} </td>
             <td class="text-right"> ${displayNum(exchanged)} </td>
             <td> ${feeDisplayed} </td>
             <td class="text-right bold"> ${totalCreditDisplayed} </td>
             <td> ${date} </td>
             <td> ${timeDisplayed} </td>
             <td> <a class="btn btn-primary" href="/transactions/${id}" role="button"> Details </a> </td>
            </tr>  
         `
      
      });
      

      console.log('transactionsHTML', transactionsHTML);

       const transactionsTable = 
       `<table class="table table-striped table-hover">
          <thead class="thead-dark">
            <tr>
             <th>Stock</th>
             <th>Action</th>
             <th># Shares</th>
             <th class="text-right">Price </th>
             <th class="text-right">Exchanged</th>
             <th>Fee</th>
             <th class="text-right">Total Credit</th>
             <th>Date</th>
             <th>Time</th>
             <th> </th>
            </tr> 
          </thead>   
         <tbody>`
        +'</tbody>'
             + transactionsHTML. join (' ');
        +'</table>';

        transactionsConatiner.innerHTML = transactionsTable;

    } catch(err) {

     
    }

});



function displayNum(num) {
  let numFormatted = num < 1000 ? num : parseInt(num / 1000, 10) + ',' + num.toString( parseInt(num / 1000, 10).toString().length );
  return numFormatted;
};
