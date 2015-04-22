angular.module('common', [
  // Declare here all AngularJS dependencies that are shared by all modules.
  'supersonic'
]);

angular
  .module('example')
  .controller('LearnMoreController', function($scope, supersonic) {

    $scope.navbarTitle = "Learn More";

  });

angular
  .module('example')
  .controller('SettingsController', function($scope, supersonic) {
    $scope.navbarTitle = "Settings";
  });

angular
  .module('common')
  .controller('ViewPickupGamesController', function($scope, supersonic) {

	$scope.spice = 'very';

   /* $scope.chiliSpicy = function() {
        $scope.spice = 'chili';
    };

    $scope.jalapenoSpicy = function() {
        $scope.spice = 'jalapeño';
    };*/
});

