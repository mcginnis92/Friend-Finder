var friendData = require("../data/friends");
var path = require("path");

module.exports = function(app) {

    //GET route
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });

    //POST route
    app.post("/api/friends", function (req, res){
      
        var userResponse = {};
            userResponse.name = req.body.name;
            userResponse.photo = req.body.photo;
            userResponse.scores = JSON.parse(req.body.scores);
            console.log(userResponse);

        res.json(userResponse);
    })
};