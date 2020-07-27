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
    // const genOptions = data.map(game => {
    // console.log(data);
    const filter = [];
    for (let i = 0; i < data.length; i++) {
      // console.log(data[i].genres);
      // console.log(filter);
      if (filter.indexOf(data[i].genres) === -1) {
        // console.log("yes");
        filter.push(data[i].genres);
      }
      $(".autoCompleteGenre").append(`<option value="${filter[i]}">${filter[i]}</option>`);
      // console.log(filter);
    }
  });
};
getGames();
getGenres();
