module.exports = function (sequelize, DataTypes) {
  var Profile = sequelize.define("Profile", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    aboutme: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    topgamesPlayed: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    genres: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    achievements: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Profile;
};
