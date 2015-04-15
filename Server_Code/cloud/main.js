
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

Parse.Cloud.define("get_games", function(request, response)
{
	var query = new Parse.Query("Current_Games");
	query.select("GameID", "Location_Name", "Sport", "Num_Of_Players", "Max_Num_Of_Players", "Start_Time", "End_Time");
	query.ascending("Start_Time");
	query.limit(2);//increase to usable size
	query.find({
		success: function(results) {
			response.success(results);
		},
		error: function() {
			response.error("Game lookup failed");
		}
	});
});

Parse.Cloud.define("join_game", function(request, response)
{
	//add name to list of players

	var Players = Parse.Object.extend("Players");
	var add_to_list = new Players();
	//gets data from phone request
	add_to_list.set("PlayerID", request.params.PlayerID);
	add_to_list.set("GameID", request.params.GameID);
	//Save data to Players table
	add_to_list.save(null,
	{
		success: function(add_to_list)
		{
//			response.success("Player added");
		},
		error: function(add_to_list, error)
		{
//			response.error("Player add failed");
		}
	});

	//increment number in current_games table
	var Current_Games = Parse.Object.extend("Current_Games");
	var add_to_num = new Parse.Query(Current_Games);
	add_to_num.equalTo("GameID", request.params.GameID);

	add_to_num.find({
		success: function(results) {
			var game = results[0];
			//var current_player_number = game.get('Num_Of_Players');
			//game.set("Num_Of_Players", current_player_number + 1);
			game.set("Num_Of_Players", 4);
			game.save(null,
			{
				success: function(game)
				{
					response.success("Current_Games table updated");
				},
				error:function(game, error)
				{
					response.error("Current_Games update failed");
				}
			});
		},
		error: function() 
		{
			response.error("Game not found");
		}
	});

});
