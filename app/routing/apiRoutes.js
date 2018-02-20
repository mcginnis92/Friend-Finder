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

    })
}