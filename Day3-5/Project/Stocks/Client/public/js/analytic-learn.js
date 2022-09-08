const firstName = localStorage.getItem('STOCKS_FIRSTNAME');
const firstNameContainer = document.querySelector('#firstName');
firstNameContainer.innerHTML = `Welcome ${firstName}!`;


token = localStorage.getItem("STOCKS_ACCESS_TOKEN");
userId = localStorage.getItem("STOCKS_CURRENT_USER_ID");

document.addEventListener('DOMContentLoaded', async(e) => {
  e.preventDefault();

  const info = document.querySelector('#info');
  info.innerHTML = 'Total Buy:'


  //line Chart
  const canvasLine = document.querySelector('#canvasLine');
  canvasLine.innerHTML = `<canvas id="myChart" width="1600" height="900"></canvas>`;


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



//bar Chart
  const canvasBar = document.querySelector('#canvasBar');
  canvasBar.innerHTML = `<canvas id="myChart2" width="1600" height="900"></canvas>`;
const ctx2 = document.getElementById('myChart2').getContext('2d');
const myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});



});