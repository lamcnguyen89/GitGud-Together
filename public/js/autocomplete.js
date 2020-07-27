//Grabbing div by class where autocomplete data will function on preferences.handlebars.
// const autoComplete = document.querySelector(".autoComplete");
// //Grabbing div by id where autocomplete data will show on the page.
// const gameSuggest = document.querySelector("#game-suggest");
// //requiring models to use sequelize.
let games = [];


const getGames = () => {
  $.get("/api/games", function (data) {
    games = data;
    const options = data.map(game => {
      return `<option value="${game.name}">${game.name}</option>`;
    }).join(" ");

    $(".autoComplete").each((i, val)=> {
      $(val).append(options);
    });

    getGenres();
    // const genres =
  });
};

const getGenres = () => {
  console.log();
};

getGames();
// //search games table in steamGames_db and filtering it.
// const suggestGames = formText => {
//   //Matches current text input.
//   let gamematches = games.filter(game => {
//     return game.name.toLowerCase().includes(formText.toLowerCase());
//   });

//   console.log(gamematches);
// };

// //adding event listener to the top games forms.
// autoComplete.addEventListener("input", () => suggestGames(autoComplete.value));