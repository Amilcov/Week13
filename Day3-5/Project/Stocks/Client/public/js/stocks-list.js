document.addEventListener('DOMContentLoaded', async() => {

    try {

      token = localStorage.getItem("STOCKS_ACCESS_TOCKEN");
      userId = localStorage.getItem("STOCKS_CURRENT_USER_ID");
  
      const res = await fetch('http://localhost:8081/stocks', {
           headers: {
            Authorization: `Bearer ${token}`
           }
      });


      if(res.status === 401) {
        window.location.href = '/login';
        return;
      };

      const { stocks } = await res.json();
      const stocksConatiner = document.querySelector('.stocks-container');
  
      
      const stocksHTML = stocks.map (({id, name, symbol, yearListed, marketShares, marketValue, info }) => 
         ` <tr> 
             <td> ${symbol} </td>
             <td> ${name} </td>
             <td> ${yearListed} </td>
             <td> ${marketShares} </td>
             <td> ${marketValue} </td>
             <td> <a class="btn btn-primary" href="/stocks/${id}" role="button"> Details </a> </td>
            </tr>  
         `
      );
    

       const stocksTable = 
       `<table class="table table-striped table-hover">
          <thead class="thead-dark">
            <tr>
             <th> Symbol </th>
             <th> Name </th>
             <th> Year Listed </th>
             <th> Market Shares </th>
             <th> Market Value </th>
             <th> </th>
            </tr> 
          </thead>   
         <tbody>`
        +'</tbody>'
             + stocksHTML. join (' ');
        +'</table>';

         stocksConatiner.innerHTML = stocksTable;


    } catch(err) {

     
    }

})