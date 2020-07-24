
const userName = document.querySelector(".userName");
const steamUsername= document.querySelector(".steamUsername");

// Get current User and display email information.
// Here you can display any User information coming from the server.
fetch("/auth/user")
  .then(response => response.json())
  .then(data => {
       userName.textContent = data.email; })
  .catch(err => console.log(err));

  fetch("/user/profile")
  .then(response => response.json())
  .then(data => {
       steamUsername.textContent = data.steamUsername; })
       .catch(err => console.log(err));