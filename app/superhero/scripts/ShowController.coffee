angular
  .module('superhero')
  .controller("ShowController", ($scope, Superhero, supersonic) ->
    $scope.superhero = null
    $scope.showSpinner = true
    $scope.dataId = undefined

    _refreshViewData = ->
      Superhero.find($scope.dataId).then (superhero) ->
        $scope.$apply ->
          $scope.superhero = superhero
          $scope.showSpinner = false

    supersonic.ui.views.current.whenVisible ->
      _refreshViewData() if $scope.dataId

    supersonic.ui.views.current.params.onValue (values) ->
      $scope.dataId = values.id
      _refreshViewData()

    $scope.remove = (id) ->
      $scope.showSpinner = true
      $scope.superhero.delete().then ->
        supersonic.ui.layers.pop()
  )
