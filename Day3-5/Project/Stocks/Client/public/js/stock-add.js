const firstName = localStorage.getItem('STOCKS_FIRSTNAME');
const firstNameContainer = document.querySelector('#firstName');
firstNameContainer.innerHTML = `Welcome ${firstName}!`;

const addForm = document.querySelector('.add-form');


addForm.addEventListener('submit', async(e) => {
    e.preventDefault();
    const formData = new FormData(addForm);

    const symbol = formData.get('symbol');
    const name = formData.get('name');
    const yearListed = formData.get('yearListed');
    const marketShares = formData.get('marketShares');
    const marketValue = formData.get('marketValue');
    const info = formData.get('info');

    body = {symbol, name, yearListed, marketShares, marketValue, info};
  

    try {
      token = localStorage.getItem("STOCKS_ACCESS_TOKEN");
      userId = localStorage.getItem("STOCKS_CURRENT_USER_ID");

   
      const res = await fetch(`http://localhost:8081/stock`, {
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

    
       window.location.href = '/stock';

    } catch(err) {
       handleError(err);
    };

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