$(".submitBtn").on("click", function (event) {
  event.preventDefault();
  const profileObj = {
    username: $("#steamUsername").val().trim(),
    aboutme: $("#about").val().trim(),
    topgamesPlayed: $("#currently").val().trim(),
    genres: $("#genre").val().trim(),
    achievements: $("#achievements").val().trim(),
    location: $("#location").val().trim(),
    game1: $("#favoriteGame01").val().trim(),
    game2: $("#favoriteGame02").val().trim(),
    game3: $("#favoriteGame03").val().trim(),
    game4: $("#favoriteGame04").val().trim(),
    game5: $("#favoriteGame05").val().trim()
  };
  console.log($("#steamUsername").val());
  $.post("/api/profile", profileObj)
    .then(response => console.log(response))  
    .catch(err => console.log(err));
});