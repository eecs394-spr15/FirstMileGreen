angular
  .module('game')
  .controller("DrawerController", function ($scope, Game, supersonic) {
    
   $scope.createClicked = function(){
  	supersonic.ui.layers.replace("new");
	supersonic.ui.drawers.close();
   }; 
   
   $scope.localClicked = function(){
  	supersonic.ui.layers.replace("local");
	supersonic.ui.drawers.close();
   }; 
   
  

  });