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
    var absValue0 = 0;
    var absValue1 = 0;
    var absValue2 = 0;

    for (var i = 0; i < scoreNums.length; i++) {
      absValue0 += Math.abs(friends[0].scores[i] - scoreNums[i]);
      absValue1 += Math.abs(friends[1].scores[i] - scoreNums[i]);
      absValue2 += Math.abs(friends[2].scores[i] - scoreNums[i]);
    }

    var newFriend;
    var match = Math.min(absValue0, absValue1, absValue2);
    switch (match) {
      case absValue0:
        newFriend = friends[0];
        break;
      case absValue1:
        newFriend = friends[1];
        break;
      case absValue2:
        newFriend = friends[2];
        break;
    }

    res.json(newFriend);
  })
};