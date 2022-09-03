
const firstName = localStorage.getItem('STOCKS_FIRSTNAME');
const firstNameContainer = document.querySelector('#firstName');
firstNameContainer.innerHTML = `Welcome ${firstName}!`;

const stockId = document.querySelector('#stockId').innerHTML;
token = localStorage.getItem("STOCKS_ACCESS_TOKEN");
userId = localStorage.getItem("STOCKS_CURRENT_USER_ID");

document.addEventListener('DOMContentLoaded', async(e) => {
    e.preventDefault();

    try {


        const res = await fetch(`http://localhost:8081/stock/${stockId}`, {
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

     const { stock } = await res.json();
     document.querySelector('#stockName').innerHTML = `${stock.name} (${stock.symbol})`;

    } catch(err) {
        if(err.status >= 400 && err.status < 600) {
           const errorsJSON = await err.json();
           let errorsContainer = document.querySelector('.errors-container');

           let errorsHTML = [`
            <div class="alert alert-danger">
              Something went wrong. Please try again.
            </div>
           `];

           const { errors } = errorsJSON;
           if(errors && Array.isArray(errors)) {
            errorsHTML = errors.map(message => `  
              <div class="alert alert-danger">
                ${message}
              </div>

            `);
           };
        } else {
           alert('Something went wrong.Check your intenet connection and try again');
        }
    };


    const deleteButtons = document.querySelectorAll('.delete-button');
    if (deleteButtons) {
        deleteButtons.forEach( (button) => {
            button.addEventListener('click', handleDelete);
        });
    
    };

});




async function handleDelete(id) {
    try {
    
        const res = await fetch(`http://localhost:8081/stock/delete/${stockId}`, {
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

        window.location.href = '/stock';


    } catch(err) {
         
       if (err.status >= 400 && err.status < 600 ) {

          const errorsJSON = await res.json();
          const errorsContainer = document.querySelector('.errors-container'); 

          let errorsHTML = [`
             <div class="card card-danger">
                <p>  Something went wrong. Please try again.</p>
             </div>
          `];

           const { errors } = errorsJSON;
           if ( errors && Array.isArray(errors)) {
              errorsHTML = errors.map( (message) => {
               ` 
                 <div class="card card-danger"> 
                    <p> ${message}</p>
                  </div>
               `
           });
        }

       errorsContainer.innerHTML = errorsHTML.join("");


       } else {
         console.error('Something went wrong. Please check internet connection and try again.')
       }

       
    }
}