app.controller('NavigatorController' , function($scope,NavigatorService){

	
	
	
	
	$scope.Navigator='this is Navigator'
	
	$scope.getAllMenus = function() {
		
		$scope.Menus = NavigatorService.getAllMenus();
	}
	
});