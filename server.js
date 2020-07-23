const express = require("express");
const db = require("./models");
const session = require("express-session");
const passport = require("passport");
const path = require("path");

const app = express();

// import routes
const routes = require("./routes");

// set up PORT
const PORT = process.env.PORT || 8080;

// use Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));

// set up express-session
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// use passport middleware
app.use(passport.initialize());
app.use(passport.session());

// use routes
app.use(routes);

// connect to database and start server
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`app listening on: http://localhost:${PORT}`);
  });
});
