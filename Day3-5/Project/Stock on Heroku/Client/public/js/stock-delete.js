
const firstName = localStorage.getItem('STOCKS_FIRSTNAME');
const firstNameContainer = document.querySelector('#firstName');
firstNameContainer.innerHTML = `Welcome ${firstName}!`;

const stockId = document.querySelector('#stockId').innerHTML;
token = localStorage.getItem("STOCKS_ACCESS_TOKEN");
userId = localStorage.getItem("STOCKS_CURRENT_USER_ID");

document.addEventListener('DOMContentLoaded', async(e) => {
    e.preventDefault();

    try {


        //const res = await fetch(`http://localhost:8081/stock/${stockId}`, {
        const res = await fetch(`https://am-stock-server.herokuapp.com/stock/${stockId}`, {
            
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
       handleError(err);
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
    
        //const res = await fetch(`http://localhost:8081/stock/delete/${stockId}`, {
        const res = await fetch(`https://am-stock-server.herokuapp.com/stock/delete/${stockId}`, {
        
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
        
        if (!errors && errorsJSON && errorsJSON.name ==  "SequelizeForeignKeyConstraintError") {
           errorsContainer.innerHTML = '<div class="alert alert-danger">This Stock has transaction made by other user. It can not be deleted. </div>';
        }


    } else {
        alert('Something went wrong. Check internety connection and try again.');
    }
};