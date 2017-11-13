//create variable to hold the required data from our data folder
const data = require("../data/friends.js");

//Create a route to pull in the data from json response
module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(data);
    });

    //We need to create out posts in this section

