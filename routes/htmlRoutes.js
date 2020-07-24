const router = require("express").Router();
const path = require("path");
const auth = require("../middleware/auth");


// // user authorized views - they all use the "auth" middleware
// router.get("/", auth, (req, res) => res.sendFile(path.join(__dirname, "../public/dashboard.html")));
// router.get("/user/page2", auth, (req, res) => res.sendFile(path.join(__dirname, "../public/preferences.html")));
// router.get("/user/profile", auth, (req, res) => res.sendFile(path.join(__dirname, "../public/profile.html")));

// // login and register forms view
// router.get("/user/login", (req, res) => res.sendFile(path.join(__dirname, "../public/login.html")));
// router.get("/user/register", (req, res) => res.sendFile(path.join(__dirname, "../public/register.html")));

// user authorized views - they all use the "auth" middleware
router.get("/", auth, (req, res) => res.render("dashboard"));
router.get("/user/preferences", auth, (req, res) => res.render("preferences"));
router.get("/user/profile", auth, (req, res) => res.render("profile"));

// login and register forms view
router.get("/user/login", (req, res) => res.render("login"));
router.get("/user/register", (req, res) => res.render("register"));

module.exports = router;