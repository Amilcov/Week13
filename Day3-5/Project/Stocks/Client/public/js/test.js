const firstName = localStorage.getItem('STOCKS_FIRSTNAME');
const firstNameContainer = document.querySelector('#firstName');
firstNameContainer.innerHTML = `Welcome ${firstName}!`;

const token = localStorage.getItem("STOCKS_ACCESS_TOKEN");
const userId = localStorage.getItem("STOCKS_CURRENT_USER_ID");

let data = [];
let chartData = {};

document.addEventListener('DOMContentLoaded', async() => {
   try{
       await getData();
       await processData();
       console.log('mmmm', chartData);
        displayTable();
        displayBarChart() 
        console.log('chartData - main', chartData);

   } catch (err) {
       handleError();
   }
});



async function getData(){
      
    const res = await fetch(`http://localhost:8081/analytics/users/${userId}/info`, {
        headers: {
           Authorization: `Bearer ${token}`
        }
      });

    if(res.status === 401) {
        window.location.href = '/login';
        return;
    };

    const { results } = await res.json();
    data = results;
};


async function processData() {
    for (let i = 0; i < data.length; i++) {
        const stockName = data[i].name;
        const stockNo = data[i].action + 'TotalTransitStock';
        const stockvalue = data[i].action + 'TotalTransitSum';

       if (!chartData.hasOwnProperty(stockName)) {
        chartData[stockName] = {
            name: '', 
            symbol: '',
            BuyTotalTransitStock: 0,
            BuyTotalTransitSum: 0,
            SellTotalTransitStock: 0,
            SellTotalTransitSum: 0,
            DividendTotalTransitStock: 0,
            DividendTotalTransitSum: 0
        };
       } 

        chartData[stockName].name = data[i].name;
        chartData[stockName].symbol = data[i].symbol;
        chartData[stockName].action = data[i].action;
        chartData[stockName][stockNo] = Number.parseFloat(data[i].TotalTransitStock).toFixed(2);
        chartData[stockName][stockvalue] = Number.parseFloat(data[i].TotalTransitSum).toFixed(2);
    };
};





//--
async function displayBarChart() {
  //1
  const canvas1 = document.querySelector('#canvas1');
  canvas1.innerHTML= `<canvas id="myChart1" width="1600" height="900"></canvas>`;

  //x-axis
  var stocks = ['TSLA','AAPL','MSFT','AMZN','TWTR','STK2'];
  var labelAction = ['Buy', 'Sell', 'Dividend'];

  var ctx1= document.getElementById("myChart1");
  var myChart1= new Chart(ctx1, {

    type: 'bar',
    data: {
            labels: stocks,
            datasets: [
              {
                data: [20, 10, 34, 5, 10, 9],
                label: ['Buy'],
                backgroundColor: "green"
              }, 
              {
                data: [22, 11, 33, 44, 0, 66],
                label: ['Sell'],
                backgroundColor: "#8a2be2",//["blue", "red"],
                fill: [true, true]
              },
              {
                data: [1, 2, 3, 4, 5, 6],
                label: 'Dividend',
                backgroundColor: "#0fede2"//["#0fede2" ,"#0fede2", "#0fede2", "#0fede2", "#0fede2", "#0fede2","#0fede2", ],
              }, 

              {
                data: [41, 42 , 43, 44, 45, 46],
                label: ['NrOfStocks'],
                backgroundColor: "pink"
              }, 

          ],
  
    }

  });
}

//------


async function displayTable(){
      console.log('jjjj', chartData);
    //
  
      
    let stocksHTML = '';
    let totalActiveValue = 0;
    let totalDivident = 0;

    for (let i = 0; i < Object.keys(chartData).length; i++){
         let stockName = Object.keys(chartData)[i];
         let activeNo = Number.parseFloat(chartData[stockName].BuyTotalTransitStock - chartData[stockName].SellTotalTransitStock).toFixed(2);
         let activeVal = Number.parseFloat(chartData[stockName].BuyTotalTransitSum - chartData[stockName].SellTotalTransitSum).toFixed(2);
         let dividend = Number.parseFloat(chartData[stockName].DividendTotalTransitSum).toFixed(2);

         totalActiveValue += Number.parseFloat(activeVal);
         totalDivident += Number.parseFloat(dividend);

         console.log('td',totalDivident);
         stocksHTML += 
            ` <tr> 
               <td class="bold"> ${chartData[stockName].symbol} </td>
               <td class="text-right buy"> ${displayNum(chartData[stockName].BuyTotalTransitStock)} </td>
               <td class="text-right sell"> ${chartData[stockName].SellTotalTransitStock} </td>
               <td class="text-right bold"> ${displayNum(activeNo)} </td>          
               <td class="text-right buy"> ${displayNum(chartData[stockName].BuyTotalTransitSum)} </td>
               <td class="text-right sell"> ${displayNum(chartData[stockName].SellTotalTransitSum)} </td>
               <td class="text-right bold"> ${displayNum(activeVal)} </td>
               <td class="text-right dividend"> ${displayNum(dividend)} </td>    
             `
    };
  
    let totalHTML = 
      ` <tr>
          <td class="bold" colspan="6" align="center"> TOTAL </td>
          <td class="text-right bold"> ${displayNum(Number.parseFloat(totalActiveValue).toFixed(2))}</td>
          <td class="text-right bold dividend" > ${displayNum(Number.parseFloat(totalDivident).toFixed(2))} </td>
        </tr>

        <tr>
          <td class="bold" colspan="7" align="right"> TOTAL </td>
          <td class="text-right bold"> ${displayNum(Number.parseFloat((totalActiveValue + totalDivident)).toFixed(2))}</td>
        </tr>
      `;
    const stocksTable = 
       `<table class="table table-striped table-bordered" width="auto">
          <thead class="thead-light">
            <tr>
             <th> Stock </th>
             <th> Buy - #Stock </th>
             <th> Sell - #Stock  </th>
             <th> Active - #Stock </th>
             <th> Buy - Value Stock </th>
             <th> Sell - Value Stock </th>
             <th> Active - Value Stock </th>
             <th> Dividends </th>
            </tr> 
            
          </thead>   
         <tbody>`
        +'</tbody>'
             + stocksHTML
             +totalHTML
        +'</table>';
    const stocksConatiner = document.querySelector('.table-container');
    stocksConatiner.innerHTML = stocksTable;

};


function displayNum(num) {
  let result =  num.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
  return result;
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
};
