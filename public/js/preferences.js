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

  // Empty each input box by replacing the value with an empty string:
  $("#steamUsername").val("");
  $("#about").val("");
  $("#currently").val("");
  $("#genre").val("");
  $("#achievements").val("");
  $("#location").val("");
  $("#favoriteGame01").val("");
  $("#favoriteGame02").val("");
  $("#favoriteGame03").val("");
  $("#favoriteGame04").val("");
  $("#favoriteGame05").val("");
});