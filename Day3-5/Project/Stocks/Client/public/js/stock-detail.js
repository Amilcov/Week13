
const firstName = localStorage.getItem('STOCKS_FIRSTNAME');
const firstNameContainer = document.querySelector('#firstName');
firstNameContainer.innerHTML = `Welcome ${firstName}!`;


document.addEventListener('DOMContentLoaded', async() => {
  
    try {

      token = localStorage.getItem("STOCKS_ACCESS_TOKEN");
      userId = localStorage.getItem("STOCKS_CURRENT_USER_ID");
      const stockId = document.querySelector('#stockId').innerHTML;
 
      const res = await fetch(`http://localhost:8081/users/${userId}/stocks/${stockId}/transactions`, {
           headers: {
            Authorization: `Bearer ${token}`
           }
      });

     

      if(res.status === 401) {
        window.location.href = '/login';
        return;
      };

      const { stock, transactions } = await res.json();

      const divInfo =  document.querySelector('#stock-container');
      
      divInfo.innerHTML=`
        <h3>${stock[0].name} (${stock[0].symbol})</h3>
        <div>
          <ul>
            <li> Year Listed: ${stock[0].yearListed} </li>
            <li> Market Shares ${stock[0].marketShares} </li>
            <li> Market Capitalization ${stock[0].marketValue}</li>
          </ul>
        </div>
        <div>
          <p>${stock[0].info}</p>
        </div>
        <div class="py-4">
          <a class="btn btn-primary" href=/stock/edit/${stock[0].id} role="button"> Edit </a>
          <a class="btn btn-danger ml-2" href=/stock/delete/${stock[0].id} role="button"> Delete </a>
          <a class="btn btn-warning ml-2" href="/stock" role="button"> Return To List </a>
        </div>
        `;


      const transactionsConatiner = document.querySelector('#transactions-container');

      
      const transactionsHTML = transactions.map (({id, action, quantity, price, exchanged, fee, totalCredit , date, time}) => 
      {  
       
        const classAction = action === 'Buy' ? 'buy' : action === 'Sell' ? 'sell': 'dividend';
        let totalCreditDisplayed = displayNum(totalCredit);
        totalCreditDisplayed = action === 'Buy' ?  "-" + totalCreditDisplayed : "+" + totalCreditDisplayed;
        const timeDisplayed = time.toLocaleString().substr(0,5);
        const feeDisplayed = fee == 0 ? '0' : fee;
         

         return ` <tr class=${classAction} >  
             <td> ${stock[0].symbol} </td> 
             <td class="sell"> ${action} </td> 
             <td> ${quantity} </td>
             <td class="text-right"> ${displayNum(price)} </td> 
             <td class="text-right"> ${displayNum(exchanged)} </td>
             <td> ${feeDisplayed} </td>
             <td class="text-right bold"> ${totalCreditDisplayed} </td>
             <td> ${date} </td>
             <td> ${timeDisplayed} </td>
             <td> <a class="btn btn-primary" href="/stock/${stockId}/transaction/${id}" role="button"> Details </a> </td> 
            </tr>  
         `
      });
      
      
       
       const transactionsTable = 
        `<div class="pt-3" "pb-5">
           <h3 class="py-2"> Transactions </h3>
           <div class="py-3">
               <a class="btn btn-success" href="/users/${userId}/stock/${stockId}/transaction/add" role="button">Add Transaction </a>
           </div>

           <table class="table table-striped table-hover">
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
       // +'</div>';

        transactionsConatiner.innerHTML = transactionsTable;

        if (transactionsHTML.length) document.querySelector('.btn-danger').classList.add('disabled');

    } catch(err) {
       handleError(err);
    }
     
});


function displayNum(num) {
  let numFormatted = num < 1000 ? num : parseInt(num / 1000, 10) + ',' + num.toString( parseInt(num / 1000, 10).toString().length );
  return numFormatted;
};


async function handleError(err) {
   if (err.status >= 400 && err.status < 600) {

        const errorsJSON = await err.json();
        let errorsContainer = document.querySelector('.errors-container');
        let errorsHTML = [`
             <div class="alert alert-danger">
                Something went wrong. Please try again.
            </div>   
        `];

        const { errors }  = errorsJSON;
       
        if (errors && Array.isArray(errors)) {
         errorsHTML = errors.map( err => `
            <div class="alert alert-danger">
                ${err}
            </div>
            `);
        };

        errorsContainer.innerHTML = errorsHTML.join("");

    } else {
        alert('Something went wrong. Check internety connection and try again.');
    }
}

