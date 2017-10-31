//Create your list of dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Create a variable to call the express app
var app = express();
var PORT = 3030;

//Tell express to use bodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser,json());

var friends = [
    {
        routeName: "Frank",
        name: "Frank",
        occupation: "Waiter",
        age: 19,
        score: 7
    },
    {
        routeName: "Steven",
        name: "Steven",
        occupation: "Lawyer",
        age: 35,
        score: 9
    },
    {
        routeName: "James",
        name: "James",
        occupation: "Janitor",
        age: 58,
        score: 5
    },
    {
        routeName: "Louis",
        name: "Louis",
        occupation: "Teacher",
        age: 26,
        score: 8
    },
    {
        routeName: "Doug",
        name: "Doug",
        occupation: "Golfer",
        age: 33,
        score: 6
    },
    {
        routeName: "Janice",
        name: "Janice",
        occupation: "Bus Driver",
        age: 63,
        score: 8
    },
    {
        routeName: "Susie",
        name: "Susie",
        occupation: "HR",
        age: 40,
        score: 6
    },
    {
        routeName: "Jill",
        name: "Jill",
        occupation: "Receptionist",
        age: 23,
        score: 10
    },
    {
        routeName: "Amanda",
        name: "Amanda",
        occupation: "Dentist",
        age: 35,
        score: 3
    },
    {
        routeName: "Tiffany",
        name: "Tiffany",
        occupation: "CEO",
        age: 45,
        score: 10
    }
];

//Create a route that will send the user to the ajax page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "survey.html"));
});

//get all of the friends
app.get("/all", function(req, res){
    res.json(friends);
});

//allow a search for a specific friend or all friends-provide JSON
app.get("/api/:friends?", function(req, res){
    var chosen = req.params.friends;

    if(chosen) {
        console.log(chosen);

        for(var i = 0; i < friends.length; i++){
            if(chosen === friends[i].routeName){
                return res.json(friends[i]);
            }
        }
        return res.json(false);
    }
    return res.json(friends);
});

//create new friends take a json input
app.post("/api/new", function(req,res){
    var newfriend =req.body;
    newfriend.routeName = newfriend.name.replace(/\s+/g,"").toLowerCase();

    console.log(friends);

    friends.push(newfriend);

    res.json(newfriend);
});

//make the server listen
app.listen(PORT, function() {
    console.log("App listening on PORT" + PORT);
});
