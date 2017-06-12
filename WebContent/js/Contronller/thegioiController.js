app.controller('thegioicontroller' , function($scope, listservice){

	
	
	

	
	$scope.getlist = function() {
		
		$scope.list = listservice.getlist();
	}
	
	$scope.changeItem = function(){
		//alert($scope.selectedItem.name)
	
	$scope.player = listservice.getPlayers($scope.selectedItem);
	}
});