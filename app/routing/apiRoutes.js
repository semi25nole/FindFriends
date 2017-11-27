//create variable to hold the required data from our data folder
const data = require("../data/friends.js");


//Create a route to pull in the data from json response
module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(data);
    });

    //We need to create our posts in this section
    app.post("/api/friends", function(req, res) {
        data.push(req.body);

    //logic for the matchmaking
        let Results = [];
        let x = data.length - 1;
    let userInput = data[x];

    console.log(data);

    for (let i = 0; i < data.length - 1; i++) {
        let start = 0;
        let scores = data[i].scores;
        console.log("Your friendscore is " + scores);
        for (let j = 0; j < scores.length; j++) {
        let match = userInput.scores[x] - scores[j];
        if (userInput.scores[i] >= scores[j] || userInput.scores[i] <= scores[j]) {
            difference += Math.abs(match);
        }
        }
        match.push(difference);
    }

    Array.min = function(matches) {
        return Math.min.apply(Math, matches);
    };

    var min = Array.min(matches);

    let matchOrder = matches.indexOf(min);

    console.log(matchOrder);
    console.log(data[matches].name);
    res.json(data[matchOrder]);
    });

};