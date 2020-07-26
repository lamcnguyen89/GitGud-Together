

// When the profile page loads, grab all the data for a particular user id
$(document).ready(function() {
  $.get("/api/profile-display", function(data) {
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

});


