

class logins {
  static async Showuser() {
    const response = await fetch("http://localhost:3000/users");
    const users = await response.json();

    const username = (document.getElementById("username") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;
console.log(username ,password)

  for (let user of users){
    if (username  === user.userName ) {
      console.log(user.userName)
      
    }
      //  && password === user.password 
    //   // If the username and password match, redirect the user to another page
      
    //   window.location.href = "oops.html";
    //   return false;
    // // } else{
    //   alert("Username or password is incorrect.");
    //   return;
    // }
  
  }

  if (username === "admin")
  {
     window.location.href = "register.html";
   } 

  }

}

const loginForm = document.getElementById("login-form") as HTMLFormElement;

// Add an event listener to the form's submit event
loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the default form submission
logins.Showuser()
});
