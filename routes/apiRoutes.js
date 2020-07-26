const router = require("express").Router();
const db = require("../models");

// Route to take user inputs on the preferences page and input them into the User Profle table.
router.post("/profile", function (req, res) {
  console.log(req.body);
  db.Profile.create({

    username: req.body.username,
    aboutme: req.body.aboutme,
    topgamesPlayed: req.body.topgamesPlayed,
    genres: req.body.genres,
    achievements: req.body.achievements,
    location: req.body.location,
    game1: req.body.game1,
    game2: req.body.game2,
    game3: req.body.game3,
    game4: req.body.game4,
    game5: req.body.game5
  })
    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      res.status(401).json(err);
    });
});

// router.get("/profile", function (req, res) {
//   console.log(req.body);
//   Profile.all(function (data) {
//     var profileObj = {
//       steamUsername: data
//     };
//     console.log(profileObj);
//     res.render("profile", profileObj);
//   });
// });
router.get("/games", function (req, res) {
  db.Game.findAll({}).then(function(games) {
    res.json(games);
  });
});

// Route to retrieve User Preferences data and display them on the User Profile Page
router.get("/profile-display", function(req, res) {
  if (!req.user) {
    // The user is not logged in, send back an empty object
    res.json({});
  } else {
    db.Profile.findAll({
      limit: 1,
      order: [[ "createdAt", "DESC" ]]
    }).then(function(dbProfile) {
      res.json(dbProfile);
    });
  }
});

module.exports = router;


