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

      console.log('___________transactions', transactions);


      console.log('h1');
      const transactionsConatiner = document.querySelector('.transactions-container');

      console.log('h2');
      
      const transactionsHTML = transactions.map (({id, stock, action, quantity, price, exchanged, fee, totalCredit , date, time}) => 
      
          ` <tr class=${action} > 
             <td> ${stock.symbol} </td>
             <td> ${action} </td>
             <td> ${quantity} </td>
             <td class="text-right"> ${price} </td>
             <td class="text-right"> ${exchanged} </td>
             <td> ${fee} </td>
             <td class="text-right"> ${totalCredit} </td>
             <td> ${date} </td>
             <td> ${time} </td>
             <td> <a class="btn btn-primary" href="/transactions/${id}" role="button"> Details </a> </td>
            </tr>  
         `
      
    );
      
       console.log('h3');
      console.log('transactionsHTML', transactionsHTML);

       const transactionsTable = 
       `<table class="table table-striped table-hover">
          <thead class="thead-dark">
            <tr>
             <th> Stock</th>
             <th> Action </th>
             <th> # Shares </th>
             <th> Price </th>
             <th> Exchanged </th>
             <th> Fee </th>
             <th> Total Cost</th>
             <th> Date </th>
             <th> Time </th>
             <th> </th>
            </tr> 
          </thead>   
         <tbody>`
        +'</tbody>'
             + transactionsHTML. join (' ');
        +'</table>';


        console.log('____transactionsTable', transactionsTable);

        transactionsConatiner.innerHTML = transactionsTable
;


    } catch(err) {

     
    }

})