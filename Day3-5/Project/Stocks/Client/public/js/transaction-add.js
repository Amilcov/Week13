const addForm = document.querySelector('add-transaction');


addForm.addEventListener('submit', async(e) => {
    e.preventDefault();
    const formData = new FormData(formAdd);

    const stockId = formData.get('stockId');
    const action = formData.get('action');
    const quantity = formData.get('noShares');
    const price = formData.get('price');
    const exchanged = formData.get('exchanged');
    const fee = formData.get('fee');
    const totalCredit = formData.get('totalCredit');
    const date = formData.get('date');
    const time = formData.get('time');

    body = {stockId, action, quantity, price, exchanged, fee, totalCredit, date, time};
     console.log('body:', body);
    try {
      token = localStorage.getItem("STOCKS_ACCESS_TOKEN");
      userId = localStorage.getItem("STOCKS_CURRENT_USER_ID");
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

       window.location.href = '/transactions';

    } catch(err) {
        if (err.status >= 400 && err.status < 600) {
           const errorsJSON = await err.json();
           const errorsContainer = document.querySelector('.errors-container');

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
           errorsContainer = errorsHTML.join("");

        } else {
          alert('Something went wrong. Check internety connection and try again.');
        }
    };

});