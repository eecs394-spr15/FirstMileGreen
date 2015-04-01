angular
  .module('superhero')
  .controller("EditController", ($scope, Superhero, supersonic) ->
    $scope.superhero = null
    $scope.showSpinner = true

    supersonic.ui.views.current.params.onValue (values) ->
      Superhero.find(values.id).then (superhero) ->
        $scope.$apply ->
          $scope.superhero = superhero
          $scope.showSpinner = false

    $scope.submitForm = ->
      $scope.showSpinner = true
      $scope.superhero.save().then ->
        supersonic.ui.modal.hide()

    $scope.cancel = ->
      supersonic.ui.modal.hide()
  )
