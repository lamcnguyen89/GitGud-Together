// When the profile page loads, grab all the data for a particular user id
$(document).ready(function() {

  let profileId = null;

  $.get("/api/profile", function(data) {
    console.log(data);
    profileId = data.id;
    $("#usernameAppend").text(data.username);
    $("#locationAppend").text(data.location);
    $("#nowPlayingAppend").text(data.topgamesPlayed);
    $("#gameAppend01").text(data.game1);
    $("#gameAppend02").text(data.game2);
    $("#gameAppend03").text(data.game3);
    $("#gameAppend04").text(data.game4);
    $("#gameAppend05").text(data.game5);
    $("#genreAppend").text(data.genres);
    $("#aboutMeAppend").text(data.aboutme);
    $("#achievementsAppend").text(data.achievements);
  });


  // Delete the user profile that is displayed :
  $(".deleteBtn").on("click", function (event) {
    event.preventDefault();
    $.ajax({
      method: "DELETE",
      url: "/api/profileDelete/" + profileId
    })
      .then(function(results) {
        console.log(results);
        window.location.href="/";
      });
  });

});


