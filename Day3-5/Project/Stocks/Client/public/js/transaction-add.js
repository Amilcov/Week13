const firstName = localStorage.getItem('STOCKS_FIRSTNAME');
const firstNameContainer = document.querySelector('#firstName');
firstNameContainer.innerHTML = `Welcome ${firstName}!`;

const addForm = document.querySelector('.add-form');

token = localStorage.getItem("STOCKS_ACCESS_TOKEN");
userId = localStorage.getItem("STOCKS_CURRENT_USER_ID");

const stockId = document.querySelector('#stockId').innerHTML;

document.addEventListener('DOMContentLoaded', async(e) => {

    e.preventDefault();
    setDateTime();
    try {

     let serverRouter = `http://localhost:8081/stock`;
    
      if (stockId) {
        serverRouter = `http://localhost:8081/stock/${stockId}`;
        document.querySelector('#cancelButton').setAttribute('href',`/stock/${stockId}`);
      }

      const res = await fetch(serverRouter, {
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


     let optionStocks = document.querySelector('#optionStocks');
     let optionStocksHTML = '';
     
    if(stockId) {
      const { stock } = await res.json();
      optionStocksHTML =  `<option value=${stock.id}> ${stock.symbol} - ${stock.name} </option>`
      optionStocks.innerHTML = optionStocksHTML;

    } else {
      const { stocks } = await res.json();

      if (stocks && Array.isArray(stocks)) {
         optionStocksHTML = stocks.map( stock => `
             <option value=${stock.id}> ${stock.symbol} - ${stock.name} </option>
          `);
      };

      optionStocks.innerHTML = "<select required> <option> </option>" + optionStocksHTML.join("") + "</select>";
    }

    } catch(err) {
       handleError(err);
    };

  });


addForm.addEventListener('submit', async(e) => {
    e.preventDefault();
    const formData = new FormData(addForm);

    const stockIdForm = formData.get('stockId');
    const action = formData.get('action');
    const quantity = formData.get('noShares');
    const price = formData.get('price');
    const exchanged = formData.get('exchanged');
    const fee = formData.get('fee');
    const totalCredit = formData.get('totalCredit');
    const date = formData.get('date');
    const time = formData.get('time');

    body = {stockId: stockIdForm, action, quantity, price, exchanged, fee, totalCredit, date, time};


    try {
    
      body.userId = userId;

      const res = await fetch(`http://localhost:8081/users/${userId}/transaction/add`, {
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
        handleError(err);
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
      exchangedField.value = (noSharesField.value * priceField.value).toFixed(6);
      totalField.value = (exchangedField.value - feeField.value * action).toFixed(6);
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
        totalField.value = (exchangedField.value - feeField.value * action).toFixed(6);
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



function setDateTime() {
  let dateTime = new Date().toLocaleString('ro-RO');
  let date = dateTime.substring(0, 10).split('.');

  document.querySelector('#dateField').value = date.reverse().join('-');
  document.querySelector('#timeField').value = dateTime.substring(12, 17);
}