Last Updated 4/15

Working Queries:
get_players
get_games
hello (only for testing)
join_game
leave_game
create_game

Left to do (check Trello):
make "more info" query (replace get_players?)
make checks for join game, leave_game, and create_game


How to use:

The basic JS used to run code to use a cloud server function should look something like this:


Parse.Cloud.run('join_game', {"GameID": "3", "PlayerID":"Spencer"}, {
  success: function(result) {
  },
  error: function(error) {
  }
});


Where 'join_game' is the 

Any parameters you want to pass should resemble a JSON paramaters dictionary (Note that if you don't want to pass anything, just use {})

i.e. {"param1": "data1", "param2": num1}

the result variable should contain the results of the requested query


