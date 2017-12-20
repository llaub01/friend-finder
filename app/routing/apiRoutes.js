// requires
var path = require("path");
var friends = require("../data/friends.js");

// export the api routes
module.exports = function(app) {

	app.get("/api/friends", function(req, res) {
		res.json(friends);
	});

	// post friend
	app.post("/api/friends", function(req, res) {
		
		console.log(req.body);

		var newFriend = req.body;
		var responses = newFriend.scores;

		// find the best match
		var bestMatchName;
		var bestMatchPhoto;
		var totalDiff = 1000; 

		// look through existing friends
		for (var i = 0; i < friends.length; i++) {
		
			var difference = 0;
			for (var j = 0; j < responses.length; j++) {
				difference += Math.abs(friends[i].scores[j] - responses[j]);
			}

			// get lowest diff
			if (difference < totalDiff) {
				totalDiff = difference;
				bestMatchName = friends[i].name;
				bestMatchPhoto = friends[i].photo;
			}
		}

		var sendItBack = {
			// status: "OK",
			bestMatchName: bestMatchName,
			bestMatchPhoto: bestMatchPhoto
		}

		// Add the friend to the list
		friends.push(newFriend);
		res.json(sendItBack);
	});
};
