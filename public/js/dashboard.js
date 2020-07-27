$(document).ready(function() {
  $.get("/api/dashboardprofile", function(data) {
    console.log(data);
    profileId = data.id;
    $("#steamusername").text(data[0].username);
    $("#favgenre").text(data[0].genres);
  });
});