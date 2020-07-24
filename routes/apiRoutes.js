const router = require("express").Router();
const db = require("../models");

// use this file to code your API routes

router.post("/profile", function (req, res) {
  console.log(req.body);
  db.Profile.create({

    username: req.body.username,

  })
    .then(function () {
      res.redirect(307, "/api/login");
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

module.exports = router;

