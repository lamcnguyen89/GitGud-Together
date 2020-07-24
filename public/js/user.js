
const userName = document.querySelector(".userName");
// const steamUsername= document.querySelector(".steamUsername");

// Get current User and display email information.
// Here you can display any User information coming from the server.
fetch("/auth/user")
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.email; })
  .catch(err => console.log(err));


$(".submitBtn").on("click", function (event) {
  event.preventDefault();
  console.log($("#steamUsername").val());
  $.post("/api/profile", {username : $("#steamUsername").val()})
    .then(response => response.json())

    .catch(err => console.log(err));
});