
const registerForm = document.querySelector('.signup-form')

registerForm.addEventListener('submit', async(e)=> {
  e.preventDefault();
  const formData = new FormData(registerForm);
  const firstname = formData.get('firstname');
  const lastname = formData.get('lastname');
  const username = formData.get('username');
  const email = formData.get('email');
  const password = formData.get('password');
  const body = {firstname, lastname, username, email, password};


  try {
 
    //const res = await fetch('http://localhost:8081/users', {
      const res = await fetch('https://am-stock-server.herokuapp.com/users', {
        
      method: "POST",
      body: JSON.stringify(body),
      headers: {
          "Content-Type": "application/json"
      }
    });

    
    if (!res.ok) {
        throw res;
    };
    
    const  result= await res.json();
    const { user: {id}, token } = result;
    localStorage.setItem('STOCKS_CURRENT_USER_ID', id);
    localStorage.setItem('STOCKS_ACCESS_TOKEN', token);

    

    

  } catch(err) {
      handleError(err) 
  }

})


async function handleError(err) {
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

         `)
         };
          
      } else {
        alert('Something went wrong.Check your intenet connection and try again');
      }

    }