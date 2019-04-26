var path = require("path");
var friends = require("../data/friends.js");

module.exports = function(app) {
app.get("/api/friends", function (request, response){
    response.json(friends);
});

app.post("/api/friends", function (request, response) {
    friends.push(request.body);
    response.json(true);
    var updatedScore = request.body.scores;
    var match = 0;
    var scoreArray = [];

    for (var i =0; i<friends.length; i++){
        var scoresDifference = 0; 
        for (var s=0; s<updatedScore.length; s++) {
            scoresDifference += (Math.abs(parseInt(friends[i].scores[s]- parseInt(updatedScore[s]))));

        }
        scoreArray.push(scoresDifference);
        console.log(scoreArray);
    }

    for (var i = 0; i<scoreArray.length; i++) {
        if (scoreArray[i] <= scoreArray[match]) {
            match=i;
        }
        var bestMatch = friends[match];
        response.json(bestMatch);
    }
});
}
