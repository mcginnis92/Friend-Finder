var friends = require("../data/friends");
var path = require("path");

module.exports = function (app) {

  //GET route
  app.get("api/friends", function(req, res){
    res.json(friends);
  });

  //POST route
  app.post("/api/friends", function (req, res) {

    //Turns the score string into an array so we can change the values to numbers
    var userScores = JSON.parse(req.body.scores);
    var scoreNums = userScores.map(function (i) {
      return parseInt(i, 10);
    });

    //Checks the differences in response between the user input and each existing friend
    var absVal = 0;
    var differencesArray = [];

    for (var i = 0; i < friends.length; i++) {
      var totalDifference = 0;
      
        for (var j = 0; j < scoreNums.length; j++){
          absVal = Math.abs(friends[i].scores[j] - scoreNums[j]);
          totalDifference += absVal
        }
    
      differencesArray.push(totalDifference);
    
      var match = (Math.min(...differencesArray));
        if (match === differencesArray[i]){
        var newFriend = friends[i]
        }
    }
    res.json(newFriend);
  })
};