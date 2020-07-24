const router = require("express").Router();

// use this file to code your API routes

// All routes start with: /api
module.exports = function (app) {

    // Route: /api/example
    // i.e: router.get("/example", (req, res) => {
    //     //your code here
    // })

    app.post("/user/profile", function (req, res) {
        db.Profile.create({
            username: req.body.steamusername,
            aboutme: req.body.aboutme,
            topgamesPlayed: req.body.currently,
            genres: req.body.favGenre,
            achievements: req.body.achievements,
            location: req.body.location
        })
            .then(function () {
                res.redirect(307, "/api/login");
            })
            .catch(function (err) {
                res.status(401).json(err);
            });
    });

    module.exports = router;

}