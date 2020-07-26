// When the profile page loads, grab all the data for a particular user id
$(document).ready(function() {
  $.get("/api/profile-display", function(data) {
    $("#usernameAppend").text(data[0].username);
    $("#locationAppend").text(data[0].location);
    $("#nowPlayingAppend").text(data[0].topgamesPlayed);
    $("#gameAppend01").text(data[0].game1);
    $("#gameAppend02").text(data[0].game2);
    $("#gameAppend03").text(data[0].game3);
    $("#gameAppend04").text(data[0].game4);
    $("#gameAppend05").text(data[0].game5);
    $("#genreAppend").text(data[0].genres);
    $("#aboutMeAppend").text(data[0].aboutme);
    $("#achievementsAppend").text(data.achievements);
    console.log(data);
  });

});


