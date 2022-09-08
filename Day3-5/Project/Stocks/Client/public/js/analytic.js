const firstName = localStorage.getItem('STOCKS_FIRSTNAME');
const firstNameContainer = document.querySelector('#firstName');
firstNameContainer.innerHTML = `Welcome ${firstName}!`;


token = localStorage.getItem("STOCKS_ACCESS_TOKEN");
userId = localStorage.getItem("STOCKS_CURRENT_USER_ID");

document.addEventListener('DOMContentLoaded', async (e) => {
  e.preventDefault();

  displayTableTotalGeneral()

  const info = document.querySelector('#info');
  info.innerHTML = 'Total Buy:'

  

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
   
  //2
  const canvas = document.querySelector('#canvas');
  canvas.innerHTML = `<canvas id="myChart" width="1600" height="900"></canvas>`;

// Our labels along the x-axis
  var years = [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050];
  // For drawing the lines
  var africa = [86,114,106,106,107,111,133,221,783,2478];
  var asia = [282,350,411,502,635,809,947,1402,3700,5267];
  var europe = [168,170,178,190,203,276,408,547,675,734];
  var latinAmerica = [40,20,10,16,24,38,74,167,508,784];
  var northAmerica = [6,3,2,2,7,26,82,172,312,433];

  var ctx = document.getElementById("myChart");
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: years,
      datasets: [
       { 
         data: africa,
         label: "Africa",
         borderColor: "#3e95cd",
         fill: false
      },

      { 
       data: asia,
       label: "Asia",
       borderColor: "red",
       fill: false
     },

     { 
       data: europe,
       label: "Europe",
       borderColor: "#3e95cd",
       fill: false
     },

     { 
       data: latinAmerica,
       label: "Latin America",
       borderColor: "#3e95cd",
       fill: false
     },

     { 
       data: northAmerica,
       label: "North America",
       borderColor: "#3e95cd",
       fill: false
     }
    ]
  }
});

});


async function displayTableTotalGeneral() {


  try {
      
      const res = await fetch('http://localhost:8081/analytics/users/1/info', {
           method: "GET",
           headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
           }
      });

      if(res.status === 401) {
        window.location.href = '/login';
        return;
      };

      const { stocks } = await res.json();
 

      const tableConatiner = document.querySelector('.table-container');
  
      
      const tableRows = results.map ( ({name, TotalTransitStock, TotalTransitSum, action}) => 
         ` <tr> 
             <td> ${name} </td>
             <td> ${TotalTransitStock} </td>
             <td> ${TotalTransitSum} </td>
             <td> ${action} </td>
            </tr>  
         `
      );
    

       const tableHTML = 
       `<table class="table table-striped table-hover">
          <thead class="thead-dark">
            <tr>
             <th> Stock </th>
             <th> Buy - TotalTransitStock </th> 
             <th> Sell - TotalTransitStock </th>
             <th> Active - No Stock </th>
             <th> Buy -Total Value Stock </th> 
             <th> Sell -Total Value Stock </th> 
             <th> Active - Total Value Stock </th>
            </tr> 
          </thead>`  
             + tableRows.join (' ')
        +'</tbody>'+
        +'</table>';
      

      tableConatiner.innerHTML = tableHTML;

  } catch (err) {
     handleError();
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
}