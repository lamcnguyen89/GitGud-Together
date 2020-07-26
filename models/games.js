
module.exports = function (sequelize, Datatypes) {
// Creates a "Chirp" model that matches up with DB
  var Game = sequelize.define("Game", {
    appid: {
      type: Datatypes.STRING,
    },
    name:{ 
      type: Datatypes.STRING,
    },
    release_date:{
     type: Datatypes.STRING,
    },
    developer:{
      type: Datatypes.STRING,
    },
    publisher:{ 
      type: Datatypes.STRING,
    },
    platforms:{ 
      type: Datatypes.STRING,
    },
    required_age:{ 
      type: Datatypes.STRING,
    },
    categories: {
      type: Datatypes.STRING,
    },
    genres: {
      type: Datatypes.STRING,
    },
    positive_ratings:{ 
      type: Datatypes.STRING,
    },
    negative_ratings:{
      types: Datatypes.STRING,
    },
    owners:{ 
      type:Datatypes.STRING,
    },
    price:{
      type: Datatypes.STRING,
    } 
  });
console.log(Game)

  // Syncs with DB
  Game.sync();

  // Makes the Chirp Model available for other files (will also create a table)
  module.exports = Game;
};