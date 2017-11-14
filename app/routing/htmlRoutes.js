//create a variable that will require the path npm 
var path = require("path");

//Create the proper routing to send the info from the html
module.exports = function(app){

    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

};