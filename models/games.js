
module.exports = function (sequelize, Datatypes) {

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


 return Game;
};