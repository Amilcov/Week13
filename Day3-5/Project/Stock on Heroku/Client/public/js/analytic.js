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
       displayTable();
       displayBarChartGeneral();
       //displayBarChart() 
   } catch (err) {
       handleError();
   }
});


async function getData(){
     
    //const res = await fetch(`http://localhost:8081/analytics/users/${userId}/info`, {
    const res = await fetch(`https://am-stock-server.herokuapp.com/analytics/users/${userId}/info`, {

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



async function displayTable(){
     
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
            <tr align="center">
             <th rowspan="2" style="vertical-align:top"> Stock </th>
             <th colspan="3"> #Stock </th>
             <th colspan="3"> Value Stock </th>
             <th rowspan="2" style="vertical-align:top"> Dividends </th>
            </tr> 
            <tr align="center">
             <th> Buy </th>
             <th> Sell </th>
             <th> Active </th>
             <th> Buy </th>
             <th> Sell </th>
             <th> Active </th>
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




//--
async function displayBarChartGeneral() {
  //1
  const canvas0= document.querySelector('#canvas0');
  canvas0.innerHTML= `<canvas id="myChart0" width="1600" height="900"></canvas>`;

  //x-axis
  var stocks = Object.keys(chartData);
  var labelAction = ['Buy', 'Sell', 'Active'];

  const buyStocks = [];
  const sellStocks = [];
  const activeStocks = [];
  const dividends = [];

  Object.entries(chartData).map( objStock => {
    const buy = Number.parseFloat(objStock[1].BuyTotalTransitStock).toFixed(2);
    const sell = Number.parseFloat(objStock[1].SellTotalTransitStock).toFixed(2);
    const active = Number.parseFloat(buy - sell).toFixed(2);
    const dividend = Number.parseFloat(objStock[1].DividendTotalTransitStock);

    buyStocks.push(buy);
    sellStocks.push(sell);
    activeStocks.push(active);
    dividends.push(dividend);
});

  var ctx0 = document.getElementById("myChart0");
  var myChart0 = new Chart(ctx0, {

    type: 'bar',
    data: {
            labels: stocks,
            datasets: [
              {
                data: buyStocks,
                label: ['Buy'],
                backgroundColor: "green"
              }, 
              {
                data: sellStocks,
                label: ['Sell'],
                backgroundColor: "#8a2be2",//["blue", "red"],
              },

              {
                data: dividends,
                label: ['Divident'],
                backgroundColor: "#0fede2",//["blue", "red"],
              },
              {
                data: activeStocks,
                label: 'Active',
                backgroundColor: "pink"//["#0fede2" ,"#0fede2", "#0fede2", "#0fede2", "#0fede2", "#0fede2","#0fede2", ],
              }


          ],
  
    }

  });
}

//------

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




