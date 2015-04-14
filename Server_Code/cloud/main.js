
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
	response.success("Hello world!");
});

Parse.Cloud.define("get_players", function(request, response)
{
	var query = new Parse.Query("Players");
	query.equalTo("GameID", request.params.GameID);
	query.select("PlayerID");
	query.find({
		success: function(results) {
			response.success(results);
		},
		error: function() {
			response.error("Player lookup failed");
		}
	});
});

