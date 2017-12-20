// requires
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// express stuff
var app = express();
var PORT = process.env.PORT || 3000;

// parse it
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// require the routes
require(path.join(__dirname, "./app/routing/apiRoutes.js"))(app);
require(path.join(__dirname, "./app/routing/htmlRoutes.js"))(app);

// start the server up
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
