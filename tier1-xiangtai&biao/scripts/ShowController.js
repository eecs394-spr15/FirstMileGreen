angular
  .module('game')
  .controller("ShowController", function ($scope, Game, supersonic) {
    $scope.game = null;
    $scope.showSpinner = true;
    $scope.dataId = undefined;

    var _refreshViewData = function () {
      Game.find($scope.dataId).then( function (game) {
        $scope.$apply( function () {
          $scope.game = game;
          $scope.showSpinner = false;
        });
      });
    }

    supersonic.ui.views.current.whenVisible( function () {
      if ( $scope.dataId ) {
        _refreshViewData();
      }
    });

    supersonic.ui.views.current.params.onValue( function (values) {
      $scope.dataId = values.id;
      _refreshViewData();
    });

    $scope.remove = function (id) {
      $scope.showSpinner = true;
      $scope.game.delete().then( function () {
        supersonic.ui.layers.pop();
      });
    }
  });