module.exports = function (sequelize, DataTypes) {
  var Profile = sequelize.define("Profile", {
    username: {
      type: DataTypes.STRING,
      defaultValue: "SteamUsername",
      unique: true
    },
    aboutme: {
      type: DataTypes.STRING,
      defaultValue: "AddYourself"
    },
    topgamesPlayed: {
      type: DataTypes.STRING,
      defaultValue: "AddcurrentGame"
    },
    genres: {
      type: DataTypes.STRING,
      defaultValue: "Addyourfavoritegenre"
    },
    achievements: {
      type: DataTypes.STRING,
      defaultValue: "Addyourachievements"
    },
    location: {
      type: DataTypes.STRING,
      defaultValue: "Addyourlocation"
    },
    game1: {
      type: DataTypes.STRING,
      defaultValue: "Add#1favoritegame"
    },
    game2: {
      type: DataTypes.STRING,
      defaultValue: "Add#2favoritegame"
    },
    game3: {
      type: DataTypes.STRING,
      defaultValue: "Add#3favoritegame"
    },
    game4: {
      type: DataTypes.STRING,
      defaultValue: "Add#4favoritegame"
    },
    game5: {
      type: DataTypes.STRING,
      defaultValue: "Add#5favoritegame"
    }
  });

  Profile.associate = function(models) {
    Profile.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Profile;
};