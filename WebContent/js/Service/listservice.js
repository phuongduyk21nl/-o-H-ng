app.service('listservice', function($http) {
	this.getlist = function() {
		
		// khai báo đối tượng Menu.
		var bongda = {
			'id' : 1,
			name : 'Bóng Đá','url':'bongda',
			children : []
		};
		var caulong = {
			'id' : 2,
			name : 'Cầu Lông','url':'caulong',
			children : []
		};
		var boiloi = {
			'id' : 3,
			name : 'Bơi Lội','url':'boiloi',
			children : []
		};
		var bansung = {
			'id' : 4,
			name : 'Bắn Súng','url':'bansung',
			children : []
		};

		// create array.1 tập hợp các đối tượng.
		var list = [ bongda, caulong, boiloi, bansung ];

		return list;
	};
	
	//get player from item
	this.getPlayers = function(item){
		var result = [];
		//bong da
		if(item.id === 1) {
		result.push({'name':'Player 111'});
		result.push({'name':'Player 222'});	
		result.push({'name':'Player 333'});
		}		
	
	
		else if(item.id === 2){
			result.push({'name': 'Player aaa'});	
			result.push({'name': 'Player ddd'});	
			result.push({'name': 'Player hhh'});	
		}
		return result
		}
	
});