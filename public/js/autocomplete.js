const getGames = () => {
  $.get("/api/games", function (data) {
    const options = data
      .map((game) => {
        return `<option value="${game.name}">${game.name}</option>`;
      })
      .join(" ");
    $(".autoComplete").each((i, val) => {
      $(val).append(options);
    });
  });
};

const getGenres = () => {
  $.get("/api/games", function (data) {
    const genOptions = data.map(game => {
      //work on getting game.genres filtered
      //showing multiple of each
      return `<option value="${game.genres}">${game.genres}</option>`;
    }).join(" ");
    $(".autoCompleteGenre").each((i, genVal) => {
      $(genVal).append(genOptions);
    });
  });
};

getGames();
getGenres();