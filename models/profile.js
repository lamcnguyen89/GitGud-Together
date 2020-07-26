module.exports = function (sequelize, DataTypes) {
  var Profile = sequelize.define("Profile", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    aboutme: {
      type: DataTypes.STRING,
      allowNull: false
    },

    topgamesPlayed: {
      type: DataTypes.STRING,
      allowNull: false
    },

    genres: {
      type: DataTypes.STRING,
      allowNull: false
    },
    achievements: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    game1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    game2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    game3: {
      type: DataTypes.STRING,
      allowNull: true
    },
    game4: {
      type: DataTypes.STRING,
      allowNull: true
    },
    game5: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  //Sync with DB
  Profile.sync();
  return Profile;
};
