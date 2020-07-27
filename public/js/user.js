
const userName = document.querySelector(".userName");
// const steamUsername= document.querySelector(".steamUsername");

// Get current User and display email information.
// Here you can display any User information coming from the server.
let userId = null;

fetch("/auth/user")
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.email;
    userId = data.id;
  }).catch(err => console.log(err));


