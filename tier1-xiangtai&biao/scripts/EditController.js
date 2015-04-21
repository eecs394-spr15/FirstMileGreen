angular
  .module('game')
  .controller("EditController", function ($scope, Game, supersonic) {
    $scope.game = null;
    $scope.showSpinner = true;

    // Fetch an object based on id from the database
    Game.find(steroids.view.params.id).then( function (game) {
      $scope.$apply(function() {
        $scope.game = game;
        $scope.showSpinner = false;
      });
    });

    $scope.submitForm = function() {
      $scope.showSpinner = true;
      $scope.game.save().then( function () {
        supersonic.ui.modal.hide();
      });
    }

    $scope.cancel = function () {
      supersonic.ui.modal.hide();
    }

  });
