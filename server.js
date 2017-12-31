"use strict";
//Create your list of dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Create a variable to call the express app
var app = express();


//Set an initial port, We'll use this later in our listener
var PORT = process.env.PORT || 3000;

//Tell express to use bodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './app/public')));

//Create routes to our api routes section and html routes section
require ("./app/routing/apiRoutes.js")(app);
require ("./app/routing/htmlRoutes.js")(app);

//make the server listen
app.listen(PORT, function() {
    console.log("App listening on PORT" + PORT);
});
