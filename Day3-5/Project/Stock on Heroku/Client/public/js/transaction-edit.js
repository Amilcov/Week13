
const firstName = localStorage.getItem('STOCKS_FIRSTNAME');
const firstNameContainer = document.querySelector('#firstName');
firstNameContainer.innerHTML = `Welcome ${firstName}!`;


token = localStorage.getItem("STOCKS_ACCESS_TOKEN");
userId = localStorage.getItem("STOCKS_CURRENT_USER_ID");

const transactionId = document.querySelector('#transactionId').innerHTML;
const stockId = document.querySelector('#stockId').innerHTML;
let stockIdFromTransaction;


document.addEventListener('DOMContentLoaded', async(e) => {
    e.preventDefault();
   
    try {
  
     //get values 
      //const res = await fetch(`http://localhost:8081/transactions/${transactionId}`, {
      const res = await fetch(`https://am-stock-server.herokuapp.com/transactions/${transactionId}`, {  
         
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      });

       if(res.status === 401) {
         window.location.href = '/login';
       };

       if(!res.ok) {
         throw res;
       };

       const { transaction } = await res.json();
      
       stockIdFromTransaction = transaction[0].stock.id;
       let optionStocks = document.querySelector('#optionStocks');
       let optionStocksHTML = ` <option value=${transaction[0].stock.id}> ${transaction[0].stock.symbol} - ${transaction[0].stock.name} </option>`;
       optionStocks.innerHTML = "<select> <option> </option>" + optionStocksHTML+ "</select>";

       let cancelButton = document.getElementById('cancelButton');
       if(stockId) {
        cancelButton.setAttribute('href', `/stock/${stockId}`);
       };
    

       //set values
       document.getElementsByName('stockId')[0].value = transaction[0].stock.id
       document.getElementsByName('action')[0].value = transaction[0].action
       document.getElementsByName('noShares')[0].value = transaction[0].quantity
       document.getElementsByName('price')[0].value = transaction[0].price
       document.getElementsByName('exchanged')[0].value = transaction[0].exchanged
       document.getElementsByName('fee')[0].value = transaction[0].fee
       document.getElementsByName('totalCredit')[0].value = transaction[0].totalCredit
       document.getElementsByName('date')[0].value = transaction[0].date
       document.getElementsByName('time')[0].value = transaction[0].time





    } catch(err) {
      handleError(err) 
       
    };
});


//update
 const editForm = document.querySelector('.edit-form');
 editForm.addEventListener('submit', async(e) => {
    e.preventDefault();
    const formData = new FormData(editForm);

    const action = formData.get('action');
    const quantity = formData.get('noShares');
    const price = formData.get('price');
    const exchanged = formData.get('exchanged');
    const fee = formData.get('fee');
    const totalCredit = formData.get('totalCredit');
    const date = formData.get('date');
    const time = formData.get('time');

    
    body = {userId, stockId: stockIdFromTransaction, action, quantity, price, exchanged, fee, totalCredit, date, time};
    console.log('client transaction-edit body', body);

    try {
      token = localStorage.getItem("STOCKS_ACCESS_TOKEN");
      userId = localStorage.getItem("STOCKS_CURRENT_USER_ID");

   
      //const res = await fetch(`http://localhost:8081/transactions/edit/${transactionId}`, {
      const res = await fetch(`https://am-stock-server.herokuapp.com/transactions/edit/${transactionId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(body)
      });

       if(res.status === 401) {
         window.location.href = '/login';
       };

       if(!res.ok) {
         throw res;
       };

       if (stockId) {
          window.location.href = `/stock/${stockId}`;
       } else {
          window.location.href = '/transaction';
       }


    } catch(err) {
       handleError(err) 
    };

});


const dataIn = document.querySelectorAll('.dataIn');
dataIn.forEach(field => field.addEventListener('change', handleDataInChange));

function handleDataInChange() {
  const actionField = document.querySelector('[name="action"]').value;
  const noSharesField = document.querySelector('[name="noShares"]');
  const priceField = document.querySelector('[name="price"]');  
  const exchangedField = document.querySelector('[name="exchanged"]');
  const feeField = document.querySelector('[name="fee"]');
  const totalField = document.querySelector('[name="totalCredit"]');

  if (noSharesField.value && priceField.value) {
      const action = actionField === 'Buy' ? -1 : 1;
      exchangedField.value = Number(noSharesField.value * priceField.value).toFixed(6);
      totalField.value = Number(exchangedField.value - feeField.value * action).toFixed(6);
  };

};

const dataOut = document.querySelectorAll('.dataOut');
dataOut.forEach(field => field.addEventListener('change', handleDataOutChange));

function handleDataOutChange() {
  const actionField = document.querySelector('[name="action"]').value;
  const exchangedField = document.querySelector('[name="exchanged"]');
  const feeField = document.querySelector('[name="fee"]');
  const totalField = document.querySelector('[name="totalCredit"]');

  if (exchangedField.value && feeField.value) {
        const action = actionField === 'Buy' ? -1 : 1;
        totalField.value = Number(exchangedField.value - feeField.value * action).toFixed(6);
  };

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



