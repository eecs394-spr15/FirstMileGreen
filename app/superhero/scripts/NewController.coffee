angular
  .module('superhero')
  .controller("NewController", ($scope, Superhero, supersonic) ->
    $scope.superhero = {}

    $scope.submitForm = ->
      $scope.showSpinner = true
      newsuperhero = new Superhero($scope.superhero)
      newsuperhero.save().then ->
        supersonic.ui.modal.hide()

    $scope.cancel = ->
      supersonic.ui.modal.hide()
  )
