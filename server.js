//Create your list of dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Create a variable to call the express app
var app = express();


//Set an initial port, We'll use this later in our listener
const PORT = process.env.PORT || 8080;

//Tell express to use bodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser,json());

//Create routes to our api routes section and html routes section
require(".app/routing/apiRoutes.js");
require("app/routing/htmlRoutes.js");

//make the server listen
app.listen(PORT, function() {
    console.log("App listening on PORT" + PORT);
});
