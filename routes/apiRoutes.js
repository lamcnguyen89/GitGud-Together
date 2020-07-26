const router = require("express").Router();
const db = require("../models");

// use this file to code your API routes

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

module.exports = router;

