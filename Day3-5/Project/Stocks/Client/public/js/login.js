const navBarText = document.querySelector('#navbarText');
navBarText.innerHTML = `
  <ul class="navbar-nav mr-auto">
    <li class="nav-item">
      <a class="nav-link" href="/transactions"> Transactions </a>
    </li>
  </ul>
  <span class="navbar-text px-4">
    <a class="btn btn-sm btn-dark mr-2" href='/login'> Login </a>
    <a class="btn btn-sm btn-dark" href='/register'> Register </a>
  </span>
`;


const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', async(e) => {
    e.preventDefault();

    const formData = new FormData(loginForm);
    const email = formData.get('email');
    const password = formData.get('password');
    const body = { email, password };

    try {

    
        const res = await fetch('http://localhost:8081/users/token', {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json"
          }
        });

        if(!res.ok) {
          throw res;
        };

        const {user: {id, firstname}, token} = await res.json();

        localStorage.setItem('STOCKS_CURRENT_USER_ID', id);
        localStorage.setItem('STOCKS_ACCESS_TOKEN', token);
        localStorage.setItem('STOCKS_FIRSTNAME', firstname);

  
        window.location.href = '/stock';

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
    }

})
