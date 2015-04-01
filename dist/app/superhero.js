angular.module('superhero', [
  /* Declare any module-specific dependencies here */
  'common'
]);
angular
  .module('superhero')
  .controller("EditController", function ($scope, Superhero, supersonic) {
    $scope.superhero = null;
    $scope.showSpinner = true;

    // Fetch an object based on id from the database
    Superhero.find(steroids.view.params.id).then( function (superhero) {
      $scope.$apply(function() {
        $scope.superhero = superhero;
        $scope.showSpinner = false;
      });
    });

    $scope.submitForm = function() {
      $scope.showSpinner = true;
      $scope.superhero.save().then( function () {
        supersonic.ui.modal.hide();
      });
    }

    $scope.cancel = function () {
      supersonic.ui.modal.hide();
    }

  });

angular
  .module('superhero')
  .controller("IndexController", function ($scope, Superhero, supersonic) {
    $scope.superheros = null;
    $scope.showSpinner = true;

    Superhero.all().whenChanged( function (superheros) {
        $scope.$apply( function () {
          $scope.superheros = superheros;
          $scope.showSpinner = false;
        });
    });
  });
angular
  .module('superhero')
  .controller("NewController", function ($scope, Superhero, supersonic) {
    $scope.superhero = {};

    $scope.submitForm = function () {
      $scope.showSpinner = true;
      newsuperhero = new Superhero($scope.superhero);
      newsuperhero.save().then( function () {
        supersonic.ui.modal.hide();
      });
    };

    $scope.cancel = function () {
      supersonic.ui.modal.hide();
    }

  });
angular
  .module('superhero')
  .controller("ShowController", function ($scope, Superhero, supersonic) {
    $scope.superhero = null;
    $scope.showSpinner = true;
    $scope.dataId = undefined;

    var _refreshViewData = function () {
      Superhero.find($scope.dataId).then( function (superhero) {
        $scope.$apply( function () {
          $scope.superhero = superhero;
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
      $scope.superhero.delete().then( function () {
        supersonic.ui.layers.pop();
      });
    }
  });
angular
  .module('superhero')
  .constant('Superhero', supersonic.data.model('superhero'));