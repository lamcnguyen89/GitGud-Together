const apiKey = "FBBFE315B6690D6016F8ED0B921BCD8C"
console.log(apiKey);

$(document).ready(function () {
  console.log("Hello World");
  //ajax call for username to id conversion
  const userURL =
  `https://cors-anywhere.herokuapp.com/http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=${apiKey}&vanityurl=koogly`;
  $.ajax({
    url: userURL,
    method: "GET",
    // dataType: "jsonp"
  }).then(function (response) {
    console.log(response.response.steamid);
    //return steam ID from username
    const steamID = response.response.steamid;
    gameResults(steamID)
  });

  function gameResults(steamID){
  console.log(steamID);
    //ajax call for users id owned games
    const gameURL =
      `https://cors-anywhere.herokuapp.com/http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${apiKey}&steamid=${steamID}&format=json`;
    $.ajax({
      url: gameURL,
      method: "GET",
    }).then(function (response) {
      console.log(response);
      console.log(response.response.games);
      //for loop results of game id and return game name
      const gameID = response.response.games[i].appid
      gameInfo(gameID)
    });

  function gameInfo(gameID){
    console.log();
      //ajax call for users id owned games
      const gameStatsURL =
        `https://cors-anywhere.herokuapp.com/http://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/?key=${apiKey}&appid=218620`;
      $.ajax({
        url: gameStatsURL,
        method: "GET",
      }).then(function (response) {
        console.log(response);
      });
    };
  };
}); 