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
    const filter = [];
    for (let i = 0; i < data.length; i++) {
      if (filter.indexOf(data[i].genres) === -1) {
        filter.push(data[i].genres);
      }
    }
    filter.forEach((item) => {
      $(".autoCompleteGenre").append(
        `<option value="${item}">${item}</option>`
      );
    });
  });
};
getGames();
getGenres();