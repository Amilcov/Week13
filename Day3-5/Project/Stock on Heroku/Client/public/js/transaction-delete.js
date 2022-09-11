
const firstName = localStorage.getItem('STOCKS_FIRSTNAME');
const firstNameContainer = document.querySelector('#firstName');
firstNameContainer.innerHTML = `Welcome ${firstName}!`;


token = localStorage.getItem("STOCKS_ACCESS_TOKEN");
userId = localStorage.getItem("STOCKS_CURRENT_USER_ID");
const transactionId = document.querySelector('#transactionId').innerHTML;
const stockId = document.querySelector('#stockId').innerHTML;

document.addEventListener('DOMContentLoaded', async(e) => {
    e.preventDefault();

    try {
  
        //const res = await fetch(`http://localhost:8081/transactions/${transactionId}`, {
        const res = await fetch(`https://am-stock-server.herokuapp.com/transactions/${transactionId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                 Authorization: `Bearer ${token}`
            }
        });

       
        if(!res.ok) {
           throw res;
        };

        if(res.status === 401) {
          window.location.href = '/login';
        return;
      };


     const { transaction } = await res.json();
     document.querySelector('#stockName').innerHTML = `${transaction[0].stock.name} ( ${transaction[0].stock.symbol} )`;
     document.querySelector('.transaction-container').innerHTML = 
      `
        <ul>
          <li> Action: ${transaction[0].action} </li>
          <li> DateTime: ${transaction[0].date} : ${transaction[0].time} </li>
          <li> #Shares: ${transaction[0].quantity} </li>
          <li> Price: ${transaction[0].price} </li>
          <li> Exchanged: ${transaction[0].exchanged} </li>
          <li> Fee: ${transaction[0].fee} </li>
          <li> Total Credit: ${transaction[0].totalCredit} </li>
        </ul>
     `;

     let buttons = document.querySelector('#buttons');
     let cancelButton = stockId ?  `<a class="btn btn-warning ml-2" href="/stock/${stockId}/transaction/${transactionId}" role="button"> Cancel </a>`: `<a class="btn btn-warning ml-2" href="/transaction/${transactionId}" role="button"> Cancel </a>`;
     let deleteButton = `<button class="btn btn-danger delete-button ml-2" type="submit"> Delete Transaction </button>`
     buttons.innerHTML = deleteButton + cancelButton
    
    } catch(err) {
       handleError(err);
    };


    
    const deleteButtons = document.querySelectorAll('.delete-button');
    if (deleteButtons) {
        deleteButtons.forEach( (button) => {
            button.addEventListener('click', handleDelete);
        });
    
    };
    

});




async function handleDelete() {
    try {
        
    
        //const res = await fetch(`http://localhost:8081/transaction/delete/${transactionId}`, {
        const res = await fetch(`https://am-stock-server.herokuapp.com/transaction/delete/${transactionId}`, {

            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });


        if (res.status === 401) {
           window.location.href = '/login';
        };

        if (!res.ok) {
           throw res;
        };

        if(stockId) {
          window.location.href = `stock/${stockId}`;
        } else {
          window.location.href = '/transaction';
        }


    } catch(err) {
        handleError(err);
    }
}




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
};