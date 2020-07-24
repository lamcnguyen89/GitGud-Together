
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
  const profileObj = {
    username: $("#steamUsername").val().trim(),
    aboutme: $("#about").val().trim(),
    topgamesPlayed: $("#currently").val().trim(),
    genres: $("#genre").val().trim(),
    achievements: $("#achievements").val().trim(),
    location: $("#location").val().trim(),
    
  
  
  
  
  }
  console.log($("#steamUsername").val());
  $.post("/api/profile", profileObj)
    .then(response => console.log(response))

    .catch(err => console.log(err));
});