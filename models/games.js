
module.exports = function (sequelize) {
// Creates a "Chirp" model that matches up with DB
  var Game = sequelize.define("game", {
    appid: Sequelize.STRING,
    name: Sequelize.STRING,
    release_date: Sequelize.STRING,
    developer: Sequelize.STRING,
    publisher: Sequelize.STRING,
    platforms: Sequelize.STRING,
    required_age: Sequelize.STRING,
    categories: Sequelize.STRING,
    genres: Sequelize.STRING,
    positive_ratings: Sequelize.STRING,
    negative_ratings: Sequelize.STRING,
    owners: Sequelize.String,
    price: Sequelize.String

  });
console.log(Game)

    // Syncs with DB
  Game.sync();

  // Makes the Chirp Model available for other files (will also create a table)
  module.exports = Game;
};