//Grabbing div by class where autocomplete data will function on preferences.handlebars.
const autoComplete = document.getElementsByClassName("autoComplete");
//Grabbing div by id where autocomplete data will show on the page.
const gameSuggest = document.getElementById("game-suggest");
//requiring models to use sequelize.
const gameTable = require(".../models");
//search games table in steamGames_db and filtering it.
const suggestGames = async formText =>{
  const games = await gameTable.games.findAll();
  const res = await fetch(games);
//   console.log(res);
  const gameData = await res.json();

}
//adding event listener to the top games forms.
autoComplete.addEventListener("input", ()=>suggestGames(autoComplete.value));