app.controller('listcontroller', function($scope, listservice) {

	$scope.getlist = function() {

		$scope.list = listservice.getlist();
		// $scope . list = [];
		if ($scope.list && $scope.list.length > 1) {
			// selected default item í the first item
			$scope.selectedItem = $scope.list[1];
			$scope.changeItem();
		} else {
			alert('list is empty');
		}
	}

	$scope.changeItem = function() {
		//alert($scope.selectedItem.name)

		$scope.player = listservice.getPlayers($scope.selectedItem);
	}
	
	//add a new player
	$scope.addPlayer = function(){
		var Player = { 'name' : $scope.playerName };
		$scope.player.push(Player)
	}
	
});