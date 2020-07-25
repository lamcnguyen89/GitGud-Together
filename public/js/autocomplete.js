//Grabbing div by class where autocomplete data will function on preferences.handlebars.
const autoComplete = document.querySelector(".autoComplete");
//Grabbing div by id where autocomplete data will show on the page.
const gameSuggest = document.querySelector("#game-suggest");
//requiring models to use sequelize.
const gameTable = require("./models");

//search games table in steamGames_db and filtering it.
const suggestGames = async formText =>{
  const games = await gameTable.games.findAll({});
  const res = await fetch(games);
//   console.log(res);
  const gameData = await res.json();

  //Matches current text input.
  let gamematches = gameData.filter(game=>{
    //uses a regular expression to match the character being typed to game names in db.
    const regex = new RegExp(`^${formText}, "gi"`);

  });
};
//adding event listener to the top games forms.
autoComplete.addEventListener("input", ()=>suggestGames(autoComplete.value));