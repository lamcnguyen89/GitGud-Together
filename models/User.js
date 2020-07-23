module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      max: 32,
      min: 3
    },
    usr_steam: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isAlphanumeric: true,
        max: 32,
        min: 3
      }
    },
    usr_discord: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isAlphanumeric: true,
        max: 32,
        min: 3
      }
    }
  });

  return User;
};
