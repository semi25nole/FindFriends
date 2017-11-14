//create variable to hold the required data from our data folder
const data = require("../data/friends.js");

//Create a route to pull in the data from json response
module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(data);
    });

    //We need to create out posts in this section
    app.post("/api/friends", function(req, res) {
        data.push(req.body);
    });

    let friendsArray =data.length - 1;
    let userInfo = data[friendsArray];
    for(let i = 0; i < data.length; i++){
        if(friends.score === userInfo[i].score) {
            console.log('Congrats we have a match');
        } else {
            console.log('Try again');
        }
    }


}

