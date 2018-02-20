var friends = require("../data/friends");
var path = require("path");

module.exports = function (app) {

  //GET route
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  //POST route
  app.post("/api/friends", function (req, res) {

    //Turns the score string into an array so we can change the values to numbers
    var userScores = JSON.parse(req.body.scores);
    var scoreNums = userScores.map(function(i) {
      return parseInt(i, 10);
    });

    //Checks the differences in response between the user input and each existing friend
    var absValue1 = 0;
    var absValue2 = 0;
    var absValue3 = 0;

        for (var i = 0; i < scoreNums.length; i++) {
          absValue1 += Math.abs(friends[0].scores[i] - scoreNums[i]);
          absValue2 += Math.abs(friends[1].scores[i] - scoreNums[i]);
          absValue3 += Math.abs(friends[2].scores[i] - scoreNums[i]);
        }

        var newFriend;
        var match = Math.min(absValue1, absValue2, absValue3);
            if (match == absValue1) {
              newFriend = "russian blue";
            } else if (match == absValue2) {
              newFriend = "parakeet";
            } else if (match == absValue3) {
              newFriend = "golden retriever";
            }

      res.json(newFriend);
  })
};