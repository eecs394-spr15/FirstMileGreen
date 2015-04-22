angular
  .module('game')
  .controller("NewController", function ($scope, Game, supersonic) {
    $scope.game = {};

    $scope.submitForm = function () {
      $scope.showSpinner = true;
      newgame = new Game($scope.game);
      newgame.save().then( function () {
        $scope.showSpinner = false;
        $scope.game = {};
        supersonic.ui.layers.replace("local");

      });
    };

    /*$scope.cancel = function () {
      supersonic.ui.layers.pop();
    }*/

  });