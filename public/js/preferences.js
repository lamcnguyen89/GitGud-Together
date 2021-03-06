$(".submitBtn").on("click", function (event) {
  event.preventDefault();
  const profileObj = {
    username: $("#steamUsername").val().trim(),
    aboutme: $("#about").val().trim(),
    topgamesPlayed: $("#currently").val().trim(),
    genres: $("#genre").val(),
    achievements: $("#achievements").val().trim(),
    location: $("#location").val(),
    game1: $("#favoriteGame01").val(),
    game2: $("#favoriteGame02").val(),
    game3: $("#favoriteGame03").val(),
    game4: $("#favoriteGame04").val(),
    game5: $("#favoriteGame05").val(),
    UserId: userId
  };
  $.post("/api/profile", profileObj)
    .then(response => console.log(response), $("#registrationForm")[0].reset(), window.location.href="/user/profile")
    .catch(err => console.log(err));

});

$(".updateBtn").on("click", function (event) {
  event.preventDefault();
  const profileUpdate = {
    username: $("#steamUsername").val().trim(),
    aboutme: $("#about").val().trim(),
    topgamesPlayed: $("#currently").val().trim(),
    genres: $("#genre").val(),
    achievements: $("#achievements").val().trim(),
    location: $("#location").val(),
    game1: $("#favoriteGame01").val(),
    game2: $("#favoriteGame02").val(),
    game3: $("#favoriteGame03").val(),
    game4: $("#favoriteGame04").val(),
    game5: $("#favoriteGame05").val(),
    UserId: userId
  };
  $.ajax({
    method: "PUT",
    url: "/api/profileUpdate/" + userId,
    data: profileUpdate
  })
    .then(function(results) {
      console.log(results);
      window.location.href="/user/profile";
    });
});

