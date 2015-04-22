angular
  .module('game')
  .controller("IndexController", function ($scope, Game, supersonic) {
    $scope.games = null;
    $scope.showSpinner = true;

    $scope.chevron = "super-chevron-down";
    $scope.switchButton = function(){
      if ($scope.chevron == "super-chevron-down")
        $scope.chevron = "super-chevron-up";
      else
        $scope.chevron = "super-chevron-down";
    };
    

    Game.all().whenChanged( function (games) {
        $scope.$apply( function () {
          $scope.games = games;
          $scope.showSpinner = false;
        });
    });


  });