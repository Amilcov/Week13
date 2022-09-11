const firstName = localStorage.getItem('STOCKS_FIRSTNAME');
const firstNameContainer = document.querySelector('#firstName');
firstNameContainer.innerHTML = `Welcome ${firstName}!`;

document.addEventListener('DOMContentLoaded', async() => {
  
    try {

      token = localStorage.getItem("STOCKS_ACCESS_TOKEN");
      userId = localStorage.getItem("STOCKS_CURRENT_USER_ID");
      const transactionId = document.querySelector('#transactionId').innerHTML;
      const stockId = document.querySelector('#stockId').innerHTML;
    
     
      //const res = await fetch(`http://localhost:8081/transactions/${transactionId}`, {
      const res = await fetch(`https://am-stock-server.herokuapp.com/transactions/${transactionId}`, {
           headers: {
            Authorization: `Bearer ${token}`
           }
      });

      if(res.status === 401) {
        window.location.href = '/login';
        return;
      };

      const { transaction } = await res.json();


      let returnButton = stockId ? `<a class="btn btn-warning ml-2" href="/stock/${stockId}" role="button"> Return To List </a>` :  ` <a class="btn btn-warning ml-2" href="/transaction" role="button"> Return To List </a>`;
      let deleteButton = stockId ? `<a class="btn btn-danger ml-2" href=/stock/${stockId}/transaction/delete/${transaction[0].id} role="button"> Delete </a>` : `<a class="btn btn-danger ml-2" href=/transaction/delete/${transaction[0].id} role="button"> Delete </a>`;
      let editButton = stockId ? `<a class="btn btn-primary" href=/stock/${stockId}/transaction/edit/${transaction[0].id} role="button"> Edit </a>` : `<a class="btn btn-primary" href=/transaction/edit/${transaction[0].id} role="button"> Edit </a>`;
      
      const divInfo =  document.querySelector('#transaction-container');
      divInfo.innerHTML= 
      `
        <h3>${transaction[0].stock.name} (${transaction[0].stock.symbol})</h3>
        <div>
          <ul>
            <li> Action: ${transaction[0].action} </li>
            <li> DateTime: ${transaction[0].date} : ${transaction[0].time} </li>
            <li> #Shares: ${transaction[0].quantity} </li>
            <li> Price: ${transaction[0].price} </li>
            <li> Exchanged: ${transaction[0].exchanged} </li>
            <li> Fee: ${transaction[0].fee} </li>
            <li> Total Credit: ${transaction[0].totalCredit} </li>
          </ul>
        </div>
        <div class="py-4">`+
          editButton +
          deleteButton+
          returnButton+
        `</div>
        `;

        
    } catch (err) {
        handleError(err) 
    }    

});


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