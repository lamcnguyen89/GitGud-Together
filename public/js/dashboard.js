$(document).ready(function() {
  $.get("/api/dashboardprofile", function(data) {
    console.log(data);
    profileId = data.id;
    $("#steamusername").text(data[0].username);
    $("#favgenre").text(data[0].genres);
  });
});

$(document).ready(function() {
  $.get("/api/dashboarddisplayusers", function(data) {
    console.log(data);
    for (let i = 0; i <= 6; i++) {

      var cardusername = $("#username" + i);
      cardusername.text(data[i].username);

      var genre = $("#genre" + i);
      genre.text("Genre:  " + data[i].genres);

      var game1 = $("#gameone" + i);
      game1.text("Game 1:  " + data[i].game1);

      var game2= $("#gametwo" + i);
      game2.text("Game 2:  " + data[i].game2);

      var game3 = $("#gamethree" + i);
      game3.text("Game 3:  " + data[i].game3);

      var location = $("#location" + i);
      location.text("Location:  " + data[i].location);
    }
  });
});