var friendData = require("../data/friends");
var path = require("path");

//Routes
module.exports = function(app) {
    //GET route
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });

    //POST route
    app.post("/api/friends", function (req, res){
        var userResponse = req.body;

        // var scoreArr = userResponse.scores;
        // console.log(scoreArr);

        // var numArr = scoreArr.map(i => parseInt(i, 10));
        // console.log(numArr);

        // // userResponse.name = req.name;
        // // userResponse.photo = req.photo;
        // // userResponse.scores = numArr;
        // // console.log(userResponse);

        res.json(userResponse);
    })
};