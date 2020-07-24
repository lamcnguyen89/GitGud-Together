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
<<<<<<< HEAD
    },
    steam: {
      type: DataTypes.STRING
    },
    discord: {
      type: DataTypes.STRING

=======
>>>>>>> master
    }
  });

  return User;
};
