app.service('MenuService', function($http) {
	getAllMenus = function() {
		var sub = [ 'Tư liệu', 'Phân tích', 'Người Việt 5 châu',
				'Cuộc sống đó đây', 'Quân sự' ];
		// khai báo đối tượng Menu.
		var thegioi = {
			'id' : 1,
			name : 'Thế giới',
			children : sub
		};
		var thethao = {
			'id' : 2,
			name : 'Thể thao',
			children : []
		};
		var phapluat = {
			'id' : 3,
			name : 'Pháp luật',
			children : []
		};
		var khoahoc = {
			'id' : 4,
			name : 'Khoa học',
			children : []
		};

		// create array.1 tập hợp các đối tượng.
		$scope.Menus = [ thegioi, thethao, phapluat, khoahoc ];

		return Menus;
	};
});