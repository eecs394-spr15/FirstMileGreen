angular
  .module('superhero')
  .controller("IndexController", ($scope, Superhero, supersonic) ->
    $scope.superheros = null
    $scope.showSpinner = true

    Superhero.all().whenChanged (superheros) ->
      $scope.$apply ->
        $scope.superheros = superheros
        $scope.showSpinner = false
  )